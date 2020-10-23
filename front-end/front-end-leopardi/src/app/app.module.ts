import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MappaComponent } from './mappa/mappa.component';
import { PoesiaComponent } from './poesia/poesia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MappaComponent,
    PoesiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
