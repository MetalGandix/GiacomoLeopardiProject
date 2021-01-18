import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Poesia } from '../class/poesia';
import { PoesiaService } from '../service/poesia.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-mostra-poesia',
  templateUrl: './mostra-poesia.component.html',
  styleUrls: ['./mostra-poesia.component.css']
})
export class MostraPoesiaComponent implements OnInit {
  
  constructor(private service: PoesiaService, private router: Router, private _location: Location) {  }

  poesie: Poesia[]
  poesiaSpecifica: Poesia[]
  isText: boolean

  boo1: boolean = false
  boo2: boolean = false
  prova: boolean = false
  provaNumero: number
  titoloPoesia: string

  ngOnInit() {
    this.poesie = window.history.state.poesie
    console.log(this.poesie)
  }

  filtra() {
    this.boo2 = true
    console.log(this.titoloPoesia)
    this.service.findPoesiaSingola(this.titoloPoesia).subscribe(a => {
      this.poesie = a
    })
  }

  differenza(event){
    console.log("Evento: ", event)
  }

  goBack() {
    this._location.back();
  }



  bottoneTrue() {
    this.boo1 = true
  }

  bottoneFalse() {
    this.boo1 = false
  }

  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, { static: true })
  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }

  toggle = true;
  toggle1 = true;


  status = "";
  status1 = "";
}
