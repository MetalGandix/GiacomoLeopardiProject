import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prenotazione } from '../class/prenotazione';
import { AuthenticationService } from '../service/authentication.service';
import { PrenotazioneService } from '../service/prenotazione.service';

@Component({
  selector: 'app-bacheca-eventi',
  templateUrl: './bacheca-eventi.component.html',
  styleUrls: ['./bacheca-eventi.component.css']
})
export class BachecaEventiComponent implements OnInit {

  constructor(private service: PrenotazioneService, private router: Router) {
   }

  prenotazione: Prenotazione[]
  prenotazioniEliminate: Prenotazione[]
  p: Prenotazione
  admin: boolean = false

  ngOnInit() {
  this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
    this.service.findAll().subscribe(p => 
      {
        this.prenotazione = p
        console.log(this.prenotazione)
      })

    this.service.findVisiteCancellate().subscribe(e => {
        this.prenotazioniEliminate = e
        console.log(this.prenotazioniEliminate)
    })
  }

  cancellaPrenotazione(id: number){
    console.log("id: ",id)
    this.service.deletePrenotazione(id).subscribe()
  }

  cancellaVisitaCancellata(id: number){
    this.service.deleteVisiteCancellate(id).subscribe()
    this.router.navigate(['/area-riservata']).then(() => {
      window.location.reload();
    });
  }

  send(p: Prenotazione){
    this.service.saveVisiteCancellate(p).subscribe()
    this.router.navigate(['/area-riservata']).then(() => {
      window.location.reload();
    });
  }
}
