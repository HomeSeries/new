import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SeriesWatchlistComponent } from './home/navbar/series-watchlist/series-watchlist.component';
import { MoviewatchlistComponent } from './home/navbar/moviewatchlist/moviewatchlist.component';
import { FootComponent } from './foot/foot.component';
import { WatchedComponent } from './home/navbar/watched/watched.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SeriesWatchlistComponent,
    MoviewatchlistComponent,
    FootComponent,
    WatchedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
