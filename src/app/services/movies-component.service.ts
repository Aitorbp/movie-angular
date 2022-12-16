import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';



export class MoviesResults {
  "page": number;
  "results": Array<Results>;
  "total_pages": number;
  "total_results": number;
}

export class Results {
  "adult": boolean;
  "backdrop_path": String;
  "genre_ids": Array<number>;
  "id": number;
  "original_language": String;
  "original_title": String;
  "overview": String;
  "popularity": String;
  "poster_path": String;
  "release_date": String;
  "title": String;
  "video": String;
  "vote_average": String;
  "vote_count": String;
  

}

@Injectable({
  providedIn: 'root'
})
export class MoviesComponentService {

  constructor(private readonly http: HttpClient) { }
  private readonly API = 'https://api.themoviedb.org/3/';
  private readonly API_KEY = '7e8f7af929f7baeb292f5738bbe0f011';
  private readonly REGION = 'ES';
  private readonly LANGUAGE = 'en-US';
  
  getMovies() : Observable<MoviesResults> {
    const params = new HttpParams()
    .set('sort_by', 'popularity.desc')
    .set('api_key', this.API_KEY)
    .set('region', this.REGION);
    console.log(this.API + 'discover/movie?'+  params);
    return this.http.get<MoviesResults>(this.API + 'discover/movie?'+ params);
 
  }

  getMovieById(id: number) : Observable<Results> {
    const params = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('language', this.LANGUAGE);
    console.log(this.API + '/movie/'+ id  +'?'+ params);
    return this.http.get<Results>(this.API + '/movie/'+ id  +'?'+ params);
 
  }
}
