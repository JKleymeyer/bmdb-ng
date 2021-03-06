import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { JsonResponse } from 'src/app/model/json-response';
import { MovieService } from 'src/app/service/movie.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent extends BaseComponent implements OnInit {
  title: string = "Movie-List";
  movies: Movie[] = [];
  jr: JsonResponse;

  constructor(private movieSvc: MovieService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.movieSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.movies = this.jr.data as Movie[];
      console.log(this.movies);
    });
  }

}
