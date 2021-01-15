import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import { Poesia } from 'src/app/class/poesia';
import { PoesiaService } from 'src/app/service/poesia.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-torre-passero-solitario',
  templateUrl: './torre-passero-solitario.component.html',
  styleUrls: ['../style_componenti_percorso.component.css']
})
export class TorrePasseroSolitarioComponent implements OnInit, AfterViewInit {

  private map: L.Map;
  valore: number
  poesie: Poesia[]

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor(private service: PoesiaService, private router: Router, private _location: Location) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const myAPIKey = "f1148686528a4ea488296c6f9f71041d";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: 13.5519,
      lat: 43.40187,
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

    L.marker([43.40187, 13.5519], { icon: icon }).addTo(map);
  }
  searchByCapitolo(valore: number) {
    this.service.findPoesiaSingolaByCapitolo(7).subscribe(poesieTrovate => {
      this.poesie = poesieTrovate
      this.router.navigate(['/mostra-poesia'], {
        state: { poesie: this.poesie }
      })
    })
  }

  goBack() {
    this._location.back();
  }
}