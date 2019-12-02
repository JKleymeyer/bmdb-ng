import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorListComponent } from './feature/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit-list/credit-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuComponent } from './core/menu/menu.component';
import { BaseComponent } from './feature/base/base.component';
import { SortPipe } from './pipe/sort.pipe';
import { MovieCreateComponent } from './feature/movie-create/movie-create.component';
import { FormsModule } from '@angular/forms';
import { MovieEditComponent } from './feature/movie-edit/movie-edit.component';
import { ActorCreateComponent } from './feature/actor-create/actor-create.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';
import { ActorEditComponent } from './feature/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor-detail/actor-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    MenuComponent,
    BaseComponent,
    SortPipe,
    MovieCreateComponent,
    MovieEditComponent,
    ActorCreateComponent,
    MovieDetailComponent,
    ActorEditComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
