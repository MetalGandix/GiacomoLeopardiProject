import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { HomeComponent } from './home/home.component';
import { MappaComponent } from './mappa/mappa.component';
import { PoesiaComponent } from './poesia/poesia.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mappa', component: MappaComponent },
  { path: 'poesia', component: PoesiaComponent },
  { path: 'chi-siamo', component: ChiSiamoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
