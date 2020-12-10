import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
  selector: 'app-via-roma',
  templateUrl: './via-roma.component.html',
  styleUrls: ['../style_componenti_percorso.component.css']
})
export class ViaRomaComponent implements OnInit, AfterViewInit {

  private map: L.Map;

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const myAPIKey = "f1148686528a4ea488296c6f9f71041d";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: 13.552225940634017,
      lat: 43.40131693699691,
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
  
L.marker([43.40131693699691, 13.552225940634017], { icon: icon }).addTo(map);
  }
}