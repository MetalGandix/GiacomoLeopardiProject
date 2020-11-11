import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  title = 'front-end-leopardi';

/*
export class AppComponent implements OnInit {

  title = 'front-end-leopardi';

  private cookieValue: string;
  value: string = this.cookieService.get('test');
  cookieExists: boolean = this.cookieService.check('test');

  constructor(private cookieService: CookieService) { }

  public ngOnInit(): void {
    this.cookieService.set('cookie-leopardi', 'out cookie value');
    this.cookieValue = this.cookieService.get('cookie-leopardi');
    this.cookieService.set('test', 'Hello World');
    this.cookieService.set('test', 'Hello World', { expires: 2, sameSite: 'Lax' });

    //ottenere cookie
    alert("Presi cookies dell'utente ("+ this.cookieService.get("userid") + ") con successo")
  }


*/
}
