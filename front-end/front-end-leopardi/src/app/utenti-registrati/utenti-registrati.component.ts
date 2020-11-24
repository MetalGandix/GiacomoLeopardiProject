import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { GestioneUtenteService } from '../service/gestione-utente.service';

@Component({
  selector: 'app-utenti-registrati',
  templateUrl: './utenti-registrati.component.html',
  styleUrls: ['./utenti-registrati.component.css']
})
export class UtentiRegistratiComponent implements OnInit {

  constructor(private route: Router,
    private service: GestioneUtenteService) { }

    admin: boolean = false
    utente: User[]


    ngOnInit() {
      this.admin = sessionStorage.getItem("Role") === "ROLE_ADMIN"
      this.service.findAll().subscribe(data => {
      })
    }

}