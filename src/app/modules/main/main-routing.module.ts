import { ComponentFactoryResolver, NgModule, ViewContainerRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent } from 'src/app/components/card-movie/card-movie.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { MainComponent } from './main.component';
export * from '../../components/card-movie/card-movie.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CardMovieComponent]
})


export class MainRoutingModule {
 }
