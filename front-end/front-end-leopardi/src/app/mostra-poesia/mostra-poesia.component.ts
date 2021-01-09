import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Poesia } from '../class/poesia';
import { PoesiaService } from '../service/poesia.service';

@Component({
  selector: 'app-mostra-poesia',
  templateUrl: './mostra-poesia.component.html',
  styleUrls: ['./mostra-poesia.component.css']
})
export class MostraPoesiaComponent implements OnInit {
  
  constructor(private service: PoesiaService, private router: Router) {
  }

  poesie: Poesia[]
  poesiaSpecifica: Poesia[]
  boo1: boolean = false
  boo2: boolean = false
  titoloPoesia: string

  ngOnInit() {
    this.service.findAll().subscribe(poesiaSingola => {
      this.poesie = poesiaSingola
    })
  }

  filtra() {
    this.boo2 = true
    console.log(this.titoloPoesia)
    this.service.findPoesiaSingola(this.titoloPoesia).subscribe(a => {
      this.poesie = a
    })
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

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "" : "";
  }

  enableDisableRule1() {
    this.toggle1 = !this.toggle1;
    this.status1 = this.toggle1 ? "" : "";
  }
}
