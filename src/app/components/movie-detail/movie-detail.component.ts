import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesComponentService, Results } from 'src/app/services/movies-component.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieId!: number;
  movie!: Results;

  constructor(private readonly moviesService: MoviesComponentService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
          this.movieId = params['movieId'] ;
          console.log(this.movieId);

          this.moviesService.getMovieById(this.movieId).subscribe( res =>
            this.movie = res
 
          );
          
          
      }
    )
  }

}
