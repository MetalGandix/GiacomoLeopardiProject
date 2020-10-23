import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MappaComponent } from './mappa/mappa.component';
import { PoesiaComponent } from './poesia/poesia.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MappaComponent,
    PoesiaComponent,
    ChiSiamoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
