import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prenotazione } from '../class/prenotazione';
import { PrenotazioneService } from '../service/prenotazione.service';

@Component({
  selector: 'app-prenotazione-visita',
  templateUrl: './prenotazione-visita.component.html',
  styleUrls: ['./prenotazione-visita.component.css']
})
export class PrenotazioneVisitaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: PrenotazioneService,) {
      this.prenotazione = new Prenotazione()
     }

  loginEffettuato: boolean = false
  logRicevuto: boolean
  prenotazione: Prenotazione

  ngOnInit(){
    this.logRicevuto = window.history.state.logEffettuato
    console.log("Questo è l'oggetto che ricevo " + this.logRicevuto)
    if(this.logRicevuto == true){
      this.loginEffettuato = true
      console.log(this.loginEffettuato)
    }
  }

  onSubmit(){
    this.service.save(this.prenotazione).subscribe()
  }

}
