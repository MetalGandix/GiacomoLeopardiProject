import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { CasaAdelaideAnticiComponent } from './componenti-percorso/casa-adelaide-antici/casa-adelaide-antici.component';
import { CasaLeopardiComponent } from './componenti-percorso/casa-leopardi/casa-leopardi.component';
import { CentroNazionaleStudiLeopardianiComponent } from './componenti-percorso/centro-nazionale-studi-leopardiani/centro-nazionale-studi-leopardiani.component';
import { ChiesaDeiCappucciniComponent } from './componenti-percorso/chiesa-dei-cappuccini/chiesa-dei-cappuccini.component';
import { IlColleDellInfinitoComponent } from './componenti-percorso/il-colle-dell-infinito/il-colle-dell-infinito.component';
import { LetteraDellaBefanaComponent } from './componenti-percorso/lettera-della-befana/lettera-della-befana.component';
import { MonteTaborComponent } from './componenti-percorso/monte-tabor/monte-tabor.component';
import { PalazzoVenieriComponent } from './componenti-percorso/palazzo-venieri/palazzo-venieri.component';
import { PiazzaTorreDelBorgoComponent } from './componenti-percorso/piazza-torre-del-borgo/piazza-torre-del-borgo.component';
import { PiazzuolaSabatoDelVillaggioComponent } from './componenti-percorso/piazzuola-sabato-del-villaggio/piazzuola-sabato-del-villaggio.component';
import { TorrePasseroSolitarioComponent } from './componenti-percorso/torre-passero-solitario/torre-passero-solitario.component';
import { ViaRomaComponent } from './componenti-percorso/via-roma/via-roma.component';
import { VistaMontiAzzurriComponent } from './componenti-percorso/vista-monti-azzurri/vista-monti-azzurri.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MappaComponent } from './mappa/mappa.component';
import { PoesiaComponent } from './poesia/poesia.component';
import { RegistrazionePageComponent } from './registrazione-page/registrazione-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mappa', component: MappaComponent },
  { path: 'poesia', component: PoesiaComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registrazione', component: RegistrazionePageComponent },
  { path: 'casa-leopardi', component: CasaLeopardiComponent },
  { path: 'chiesa-dei-cappuccini', component: ChiesaDeiCappucciniComponent },
  { path: 'piazzuola-sabato-del-villaggio', component: PiazzuolaSabatoDelVillaggioComponent },
  { path: 'centro-nazionale-studi-leopardiani', component: CentroNazionaleStudiLeopardianiComponent },
  { path: 'via-roma', component: ViaRomaComponent },
  { path: 'monte-tabor', component: MonteTaborComponent },
  { path: 'vista-monti-azzurri', component: VistaMontiAzzurriComponent },
  { path: 'il-colle-dell-infinito', component: IlColleDellInfinitoComponent },
  { path: 'casa-adelaide-antici', component: CasaAdelaideAnticiComponent },
  { path: 'torre-passero-solitario', component: TorrePasseroSolitarioComponent },
  { path: 'lettera-della-befana', component: LetteraDellaBefanaComponent },
  { path: 'palazzo-venieri', component: PalazzoVenieriComponent },
  { path: 'piazza-torre-del-borgo', component: PiazzaTorreDelBorgoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
