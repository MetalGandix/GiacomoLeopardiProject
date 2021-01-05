import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { AutografoInnoComponent } from './componenti-percorso/autografo-inno/autografo-inno.component';
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
import { PrenotazioneVisitaComponent } from './prenotazione-visita/prenotazione-visita.component';
import { RegistrazionePageComponent } from './registrazione-page/registrazione-page.component';
import { SceltaUtenteComponent } from './scelta-utente/scelta-utente.component';
import { TariffaComponent } from './tariffa/tariffa.component';
import { ContattiComponent } from './contatti/contatti.component';
import { UtentiRegistratiComponent } from './utenti-registrati/utenti-registrati.component';
import { InfoVisitatoreComponent } from './info-visitatore/info-visitatore.component';
import { PoesiaColleInfinitoComponent } from './link-poesie/poesia-colle-infinito/poesia-colle-infinito.component';
import { PoesiaCasaLeopardiComponent } from './link-poesie/poesia-casa-leopardi/poesia-casa-leopardi.component';
import { PoesiaChiesaCappucciniComponent } from './link-poesie/poesia-chiesa-cappuccini/poesia-chiesa-cappuccini.component';
import { PoesiaPalazzoVenieriComponent } from './link-poesie/poesia-palazzo-venieri/poesia-palazzo-venieri.component';
import { PoesiaPiazzaTorreBorgoComponent } from './link-poesie/poesia-piazza-torre-borgo/poesia-piazza-torre-borgo.component';
import { PoesiaSabatoVillaggioComponent } from './link-poesie/poesia-sabato-villaggio/poesia-sabato-villaggio.component';
import { PoesiaTorrePasseroSolitarioComponent } from './link-poesie/poesia-torre-passero-solitario/poesia-torre-passero-solitario.component';
import { PoesiaCentroNazionaleComponent } from './link-poesie/poesia-centro-nazionale/poesia-centro-nazionale.component';
import { PoesiaCasaAdelaideComponent } from './link-poesie/poesia-casa-adelaide/poesia-casa-adelaide.component';
import { PoesiaViaRomaComponent } from './link-poesie/poesia-via-roma/poesia-via-roma.component';
import { EventoComponent } from './evento/evento.component';
import { BachecaEventiComponent } from './bacheca-eventi/bacheca-eventi.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
  { path: 'piazza-torre-del-borgo', component: PiazzaTorreDelBorgoComponent },
  { path: 'autografo-inno', component: AutografoInnoComponent },
  { path: 'prenotazione-visita', component: PrenotazioneVisitaComponent },
  { path: 'scelta-utente', component: SceltaUtenteComponent },
  { path: 'area-riservata', component: AreaRiservataComponent },
  { path: 'tariffa', component: TariffaComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'utenti-registrati', component: UtentiRegistratiComponent },
  { path: 'info-visitatore', component: InfoVisitatoreComponent },
  { path: 'poesia-casa-leopardi', component: PoesiaCasaLeopardiComponent },
  { path: 'poesia-chiesa-cappuccini', component: PoesiaChiesaCappucciniComponent},
  { path: 'poesia-sabato-villaggio', component: PoesiaSabatoVillaggioComponent},
  { path: 'poesia-colle-infinito', component: PoesiaColleInfinitoComponent},
  { path: 'poesia-torre-passero-solitario', component: PoesiaTorrePasseroSolitarioComponent},
  { path: 'poesia-palazzo-venieri', component: PoesiaPalazzoVenieriComponent},
  { path: 'poesia-piazza-torre-borgo', component: PoesiaPiazzaTorreBorgoComponent},
  { path: 'poesia-centro-nazionale', component: PoesiaCentroNazionaleComponent},
  { path: 'poesia-casa-adelaide', component: PoesiaCasaAdelaideComponent},
  { path: 'poesia-via-roma', component: PoesiaViaRomaComponent},
  { path: 'evento', component: EventoComponent},
  { path: 'bacheca-eventi', component: BachecaEventiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
