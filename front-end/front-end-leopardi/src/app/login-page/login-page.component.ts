import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/jwt-auth/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private loginservice: AuthenticationService) { }

  logEffettuato: boolean = true
  username = ''
  password = ''
  invalidLogin = false
  message1: boolean = false

  ngOnInit(): void {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.invalidLogin = false
        this.router.navigate(['/scelta-utente'], {
          state: {
            logEffettuato: this.logEffettuato = true
          }
        })
      },
      error => {
        if (this.invalidLogin = true) {
          this.message1 = true
        }
      }
    )
    );
  }
}
