import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path:'main',
    loadChildren: ()=> import('./modules/main/main-routing.module').then(m => m.MainRoutingModule)
  },
  {
    path:'login',
    loadChildren: ()=> import('./components/login/login-routing.module').then(m => m.LoginRoutingModule)
  },
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: 'app-movie-detail', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
