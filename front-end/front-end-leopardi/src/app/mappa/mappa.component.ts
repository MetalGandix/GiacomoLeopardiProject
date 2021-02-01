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
export class MappaComponent implements OnInit, AfterViewInit{

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

  ngAfterViewInit() {
    const myAPIKey = "f1148686528a4ea488296c6f9f71041d";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: 13.55142,
      lat: 43.4021,
      zoom: 16
    };

    const map = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    let icon = L.divIcon({
      iconSize: [30, 42],
      iconAnchor: [15, 42] // half of width + height
    });

    map.attributionControl
      .setPrefix("")
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken: "no-token"
    }).addTo(map);

    icon = L.divIcon({
      className: 'custom-div-icon',
      html: "<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'>place</i>",
      iconSize: [30, 42],
      iconAnchor: [15, 42]
    });

    L.marker([43.3981713, 13.5519596], { icon: icon }).addTo(map);
    L.marker([43.3981415, 13.5528702], { icon: icon }).addTo(map);
    L.marker([43.397988308481956, 13.551873093784934], { icon: icon }).addTo(map);
    L.marker([43.39803201295075, 13.551656134928862], { icon: icon }).addTo(map);
    L.marker([43.39794916747729, 13.551186681668128], { icon: icon }).addTo(map);
    L.marker([43.3973867596313, 13.550378307255414], { icon: icon }).addTo(map);
    L.marker([43.39771624888235, 13.550188073299523], { icon: icon }).addTo(map);
    L.marker([43.39809170402481, 13.549666815359387], { icon: icon }).addTo(map);
    L.marker([43.39962677234598, 13.552603069518], { icon: icon }).addTo(map);
    L.marker([43.400688829187175, 13.552380016680672], { icon: icon }).addTo(map);
    L.marker([43.40182973979836, 13.552144502578813], { icon: icon }).addTo(map);
    L.marker([43.40239377083367, 13.551448424660066], { icon: icon }).addTo(map);
    L.marker([43.40250032674169, 13.549999971909983], { icon: icon }).addTo(map);
    
    fetch(
      `https://api.geoapify.com/v1/routing?waypoints=43.3981713,13.5519596|43.3981415,13.5528702|43.397988308481956,13.551873093784934|43.39803201295075,13.551656134928862|43.39794916747729,13.551186681668128|43.3973867596313,13.550378307255414|43.39771624888235,13.550188073299523|43.39809170402481,13.549666815359387|43.39962677234598,13.552603069518|43.400688829187175,13.552380016680672|43.40182973979836,13.552144502578813|43.40239377083367,13.551448424660066|43.40250032674169,13.549999971909983&mode=walk&lang=it&apiKey=f1148686528a4ea488296c6f9f71041d`
    )
    .then((data) => data.json())
    .then((geoJSONFeatures) => {L.geoJSON(geoJSONFeatures, {
      style: (feature) => {
        return {
          stroke: true,
          color: "#9933ff",
          weight: 2,
          opacity: 0.7,
          fill: true,
          fillColor: "#7300e6",
          fillOpacity: 0.15,
          smoothFactor: 0.5,
          interactive: false,
        };
      }
    }).addTo(map);
  })
}

  
   ngOnInit() {   
   }


}