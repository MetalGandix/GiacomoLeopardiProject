import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../class/evento';
import { Prenotazione } from '../class/prenotazione';
import { AuthenticationService } from '../service/authentication.service';
import { EventoService } from '../service/evento.service';

@Component({
  selector: 'app-bacheca-eventi',
  templateUrl: './bacheca-eventi.component.html',
  styleUrls: ['./bacheca-eventi.component.css']
})
export class BachecaEventiComponent implements OnInit {

  constructor(private service: EventoService, private router: Router) {
   }

  eventi: Evento[]
  prenotazioniEliminate: Prenotazione[]
  admin: boolean = false

  ngOnInit() {
    this.service.findEvents().subscribe(p => 
      {
        this.eventi = p
        console.log(this.eventi)
      })
  }
}
