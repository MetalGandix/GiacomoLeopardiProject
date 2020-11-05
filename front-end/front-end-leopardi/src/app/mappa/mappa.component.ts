import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit{
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  constructor( 
    private route: ActivatedRoute,
    private router: Router) {

  }

  bottoneCliccato: boolean = false
  visita: boolean
  aggiunta: boolean
  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 30,
    minZoom: 8,
  }
  markers = []
  infoContent = ''

  visitaGuidataMethod(){
    this.visita = true
    this.aggiunta = true
    this.bottoneCliccato = true
  }

  visitaSingolaMethod(){
    this.visita = true
    this.aggiunta = false
    this.bottoneCliccato = true
  }

  ngOnInit() {
    this.router.navigateByUrl('/mappa', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/mappa']);
  }); 
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.markers.push({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        label: {
          color: 'red',
          text: 'La mia posizione',
        },
      })
    })
    this.markers.push({
      position: {
        lat: 43.398125,
        lng: 13.551801,
      },
      label: {
        color: 'red',
        text: 'Casa Leopardi ' + (this.markers.length + 1),
      },
      title: 'Casa Leopardi' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.398118,
        lng: 13.549539,
      },
      label: {
        color: 'red',
        text: 'Casa Adelaide ' + (this.markers.length + 1),
      },
      title: 'Casa Adelaide' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.398031,
        lng: 13.551082,
      },
      label: {
        color: 'red',
        text: 'Centro Nazionale Studi Leopardiano ' + (this.markers.length + 1),
      },
      title: 'Centro Nazionale Studi Leopardiano' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.397976,
        lng: 13.552959,
      },
      label: {
        color: 'red',
        text: 'Chiesa dei Cappuccini ' + (this.markers.length + 1),
      },
      title: 'Chiesa dei Cappuccini ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.398118,
        lng: 13.549539,
      },
      label: {
        color: 'red',
        text: "Colle dell'infinito " + (this.markers.length + 1),
      },
      title: "Colle dell'infinito " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.398014,
        lng: 13.551883,
      },
      label: {
        color: 'red',
        text: "La lettera della Befana " + (this.markers.length + 1),
      },
      title: "La lettera della Befana " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.397976,
        lng: 13.552959,
      },
      label: {
        color: 'red',
        text: "Verso il Monte Tabor " + (this.markers.length + 1),
      },
      title: "Verso il Monte Tabor " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.402725,
        lng: 13.550005,
      },
      label: {
        color: 'red',
        text: "Palazzo Venieri " + (this.markers.length + 1),
      },
      title: "Palazzo Venieri " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.403816,
        lng: 13.548187,
      },
      label: {
        color: 'red',
        text: "Piazza della Torre del Borgo " + (this.markers.length + 1),
      },
      title: "Piazza della Torre del Borgo " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.398014,
        lng: 13.551883,
      },
      label: {
        color: 'red',
        text: "Piazzuola del Sabato del Villaggio " + (this.markers.length + 1),
      },
      title: "Piazzuola del Sabato del Villaggio " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.402059,
        lng: 13.551869,
      },
      label: {
        color: 'red',
        text: "La Torre del Passero Solitario " + (this.markers.length + 1),
      },
      title: "La Torre del Passero Solitario " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.401622,
        lng: 13.552179,
      },
      label: {
        color: 'red',
        text: "Via Roma " + (this.markers.length + 1),
      },
      title: "Via Roma " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
    this.markers.push({
      position: {
        lat: 43.398055,
        lng: 13.549608,
      },
      label: {
        color: 'red',
        text: "La vista sui Monti Azzurri " + (this.markers.length + 1),
      },
      title: "La vista sui Monti Azzurri " + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  click(event: google.maps.MouseEvent) {
    console.log(event)
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    })
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }


}