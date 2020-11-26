import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { GestioneUtenteService } from '../service/gestione-utente.service';

@Component({
  selector: 'app-info-visitatore',
  templateUrl: './info-visitatore.component.html',
  styleUrls: ['./info-visitatore.component.css']
})
export class InfoVisitatoreComponent implements OnInit {

  visitor: boolean = false
  constructor(private gestioneUtente: GestioneUtenteService) { }
  utente: User[]

  ngOnInit(){
  this.visitor = sessionStorage.getItem("Role") === "ROLE_VISITATORE"
  this.gestioneUtente.findUtenteSingolo(sessionStorage.getItem('username')).subscribe(data => 
    {
      this.utente = data
      console.log(this.utente)
    })
  console.log("Session storage",sessionStorage.getItem('username'))
  }

}
