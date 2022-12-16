import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/services/login.service';
import { MoviesComponentService, MoviesResults, Results } from 'src/app/services/movies-component.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private readonly moviesService: MoviesComponentService,
    private router: Router, private readonly route: ActivatedRoute) { }

   movies = new MoviesResults;
   public page!: number;
   search: string = '';
   movieSearched = new Results;
   userActive: boolean =  false;

    ngOnInit(): void { 

      this.route.queryParams.subscribe(
        (params: Params) => {
            this.userActive = params['active'] ;
            console.log(this.userActive);
        }
      )

      this.moviesService.getMovies().subscribe( res =>
        this.movies = res
      );
      
    }

    goToDetailMovie(movieId: number) {
      this.router.navigate(['app-movie-detail'], {queryParams: {movieId: movieId , userActive: this.userActive,  skipLocationChange: true}});
    }

    searchMovie(searchMovie: string) {
      console.log(searchMovie);
      this.movieSearched = this.movies.results.filter(x => x.title == searchMovie)[0];
      this.movies.results = [this.movieSearched] 
    }

 

}

