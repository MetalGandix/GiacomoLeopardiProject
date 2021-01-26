import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit{

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;
  mappa
  constructor( private http: HttpClient) {

  }

  bottoneCliccato: boolean = false
  visita: boolean
  aggiunta: boolean

  visitaGuidataMethod() {
    this.visita = true
    this.aggiunta = true
    this.bottoneCliccato = true
  }

  visitaSingolaMethod() {
    this.visita = true
    this.aggiunta = false
    this.bottoneCliccato = true
  }
  
  // Routing del percorso
  
   ngOnInit() {      
     this.http.get<any>('https://api.geoapify.com/v1/routing?waypoints=43.3981713,13.5519596|43.3981415,13.5528702|43.397988308481956,13.551873093784934|43.39803201295075,13.551656134928862|43.39794916747729,13.551186681668128|43.3973867596313,13.550378307255414|43.39771624888235,13.550188073299523|43.39809170402481,13.549666815359387|43.39962677234598,13.552603069518|43.400688829187175,13.552380016680672|43.40182973979836,13.552144502578813|43.40239377083367,13.551448424660066|43.40250032674169,13.549999971909983&mode=walk&lang=it&apiKey=f1148686528a4ea488296c6f9f71041d')
     .subscribe(calculatedRouteGeoJSON => {
       this.mappa = calculatedRouteGeoJSON
      	console.log("MAPPA",calculatedRouteGeoJSON);
      })
   }
};