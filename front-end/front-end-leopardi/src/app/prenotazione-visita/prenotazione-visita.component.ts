import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prenotazione-visita',
  templateUrl: './prenotazione-visita.component.html',
  styleUrls: ['./prenotazione-visita.component.css']
})
export class PrenotazioneVisitaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,) { }

  loginEffettuato: boolean = false
  logRicevuto: boolean

  ngOnInit(){
    this.logRicevuto = window.history.state.logEffettuato
    console.log("Questo è l'oggetto che ricevo " + this.logRicevuto)
    if(this.logRicevuto == true){
      this.loginEffettuato = true
      console.log(this.loginEffettuato)
    }
  }



}
