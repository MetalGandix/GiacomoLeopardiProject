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
  logRicevuto: boolean = false
  prenotazione: Prenotazione
  visitor: boolean = false

  ngOnInit(){
   this.visitor = sessionStorage.getItem("Role") === "ROLE_VISITATORE"
  }

  onSubmit(){
    this.service.save(this.prenotazione).subscribe()
    this.logRicevuto = true
  }

}
