import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../class/prenotazione';
import { PrenotazioneService } from '../service/prenotazione.service';

@Component({
  selector: 'app-area-riservata',
  templateUrl: './area-riservata.component.html',
  styleUrls: ['./area-riservata.component.css']
})
export class AreaRiservataComponent implements OnInit {

  constructor(private service: PrenotazioneService) { }

  prenotazione: Prenotazione[]

  vediVisite() {
    
  }

  ngOnInit() {
    this.service.findAll().subscribe(p => 
      {
        this.prenotazione = p
      })
  }


}
