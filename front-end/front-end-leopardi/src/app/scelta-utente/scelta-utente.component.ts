import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-scelta-utente',
  templateUrl: './scelta-utente.component.html',
  styleUrls: ['./scelta-utente.component.css']
})
export class SceltaUtenteComponent implements OnInit {

  admin: boolean = false
  visitor: boolean = false

  constructor(private auth: AuthenticationService) { }



  ngOnInit() {
    if(sessionStorage.getItem("Role") === "ROLE_ADMIN"){
    this.admin = true
    }else if(sessionStorage.getItem("Role") === "ROLE_VISITATORE"){
    this.visitor = true
    }
  }

  logOut() {
    this.auth.logOut()
  }

}
