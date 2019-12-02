import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {
  title: string = "Credit Create";
  credit: Credit = new Credit;
  movies: Movie[] = [];
  actors: Actor[] = [];
  id: number = 0;

  constructor(private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    //get credit for id passed in
    this.creditSvc.get(this.id).subscribe(jr => {
      this.credit = jr.data as Credit;
      console.log("credit to edit: ", this.credit)
    });
    //populate list of movies and actors
    this.movieSvc.list().subscribe(jr =>{
      this.movies = jr.data as Movie[];  
      console.log("movies: ", this.movies);
    });
    this.actorSvc.list().subscribe(jr =>{
      this.actors = jr.data as Actor[];  
      console.log("movies: ", this.actors);
    });
  }

  save(): void {
    this.creditSvc.save(this.credit).subscribe(jresp => {
      console.log("saved movie...");
      console.log(this.credit);
      this.router.navigateByUrl("/credits/list");
    });
  }

  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }

  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }
}
