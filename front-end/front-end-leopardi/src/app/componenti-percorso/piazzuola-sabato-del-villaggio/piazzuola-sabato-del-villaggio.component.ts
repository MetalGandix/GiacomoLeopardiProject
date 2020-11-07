import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-piazzuola-sabato-del-villaggio',
  templateUrl: './piazzuola-sabato-del-villaggio.component.html',
  styleUrls: ['./piazzuola-sabato-del-villaggio.component.css']
})
export class PiazzuolaSabatoDelVillaggioComponent implements OnInit {

  
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  isCollapsedChiesaSantaMaria = true;
  isCollapsedSilvia = true;

  zoom = 25
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


  ngOnInit() {
    navigator.geolocation.watchPosition(() => {
      this.center = {
        lat: 43.398014,
        lng: 13.551883,
      }
    })
    this.markers.push({
      position: {
        lat: 43.398014,
        lng: 13.551883,
      },
      label: {
        color: 'red',
        text: 'Piazzuola sabato del villaggio ',
      },
      title: 'Piazzuola sabato del villaggio ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
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
        text: 'Marker ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }

}
