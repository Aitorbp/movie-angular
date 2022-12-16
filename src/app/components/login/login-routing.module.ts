import { ComponentFactoryResolver, NgModule, ViewContainerRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent } from 'src/app/components/card-movie/card-movie.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { LoginComponent } from './login.component';
export * from '../card-movie/card-movie.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CardMovieComponent]
})


export class LoginRoutingModule {
 }
