import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
  title: string = "Credit Create";
  credit: Credit = new Credit;
  movies: Movie[] = [];
  actors: Actor[] = [];

  constructor(private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router) { }

  ngOnInit() {
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
}
