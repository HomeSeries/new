import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesWatchlistComponent } from './home/navbar/series-watchlist/series-watchlist.component';
import { MoviewatchlistComponent } from './home/navbar/moviewatchlist/moviewatchlist.component';
import { WatchedComponent } from './home/navbar/watched/watched.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'series-watchlist',
    component : SeriesWatchlistComponent
  },
  {
    path : 'movie-watchlist',
    component : MoviewatchlistComponent
  },
  {
    path : 'watched-list',
    component : WatchedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
