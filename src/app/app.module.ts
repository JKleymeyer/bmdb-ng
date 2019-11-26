import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorListComponent } from './feature/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit-list/credit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
