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
import { CasaLeopardiComponent } from './componenti-percorso/casa-leopardi/casa-leopardi.component';
import { ChiesaDeiCappucciniComponent } from './componenti-percorso/chiesa-dei-cappuccini/chiesa-dei-cappuccini.component';
import { PiazzuolaSabatoDelVillaggioComponent } from './componenti-percorso/piazzuola-sabato-del-villaggio/piazzuola-sabato-del-villaggio.component';
import { CentroNazionaleStudiLeopardianiComponent } from './componenti-percorso/centro-nazionale-studi-leopardiani/centro-nazionale-studi-leopardiani.component';
import { IlColleDellInfinitoComponent } from './componenti-percorso/il-colle-dell-infinito/il-colle-dell-infinito.component';
import { CasaAdelaideAnticiComponent } from './componenti-percorso/casa-adelaide-antici/casa-adelaide-antici.component';
import { TorrePasseroSolitarioComponent } from './componenti-percorso/torre-passero-solitario/torre-passero-solitario.component';
import { LetteraDellaBefanaComponent } from './componenti-percorso/lettera-della-befana/lettera-della-befana.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MappaComponent,
    PoesiaComponent,
    ChiSiamoComponent,
    LoginPageComponent,
    RegistrazionePageComponent,
    CasaLeopardiComponent,
    ChiesaDeiCappucciniComponent,
    PiazzuolaSabatoDelVillaggioComponent,
    CentroNazionaleStudiLeopardianiComponent,
    IlColleDellInfinitoComponent,
    CasaAdelaideAnticiComponent,
    TorrePasseroSolitarioComponent,
    LetteraDellaBefanaComponent,
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
