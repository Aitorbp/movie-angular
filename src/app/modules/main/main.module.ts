import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardMovieComponent, MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    MainComponent,
    CardMovieComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule, 
    NgxPaginationModule  
  ],
  exports: [
    MainComponent,
    CardMovieComponent 
  ]
})
export class MainModule { }
