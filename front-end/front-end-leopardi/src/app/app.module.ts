import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MappaComponent } from './mappa/mappa.component';
import { PoesiaComponent } from './poesia/poesia.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrazionePageComponent } from './registrazione-page/registrazione-page.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MappaComponent,
    PoesiaComponent,
    ChiSiamoComponent,
    LoginPageComponent,
    RegistrazionePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyDtUuNjvdTgbdXb66c9ueQyupu8_pqVa_s"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
