import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../class/prenotazione';
import { AuthenticationService } from '../service/authentication.service';
import { PrenotazioneService } from '../service/prenotazione.service';

@Component({
  selector: 'app-area-riservata',
  templateUrl: './area-riservata.component.html',
  styleUrls: ['./area-riservata.component.css']
})
export class AreaRiservataComponent implements OnInit {

  constructor(private service: PrenotazioneService) { }

  prenotazione: Prenotazione[]
  p: Prenotazione
  admin: boolean = false

  vediVisite() {
    
  }

  ngOnInit() {
  this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
    this.service.findAll().subscribe(p => 
      {
        this.prenotazione = p
      })
  }

  cancellaPrenotazione(id: number){
    debugger
    console.log("id: ",id)
    this.service.deletePrenotazione(id).subscribe()
  }



}
