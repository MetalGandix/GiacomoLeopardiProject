import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class GestioneUtenteService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + "vediUtenti");
  }

  public findUtenteSingolo(email: string): Observable<User[]> {
    return this.http.get<User[]>(this.url + "vediUtenti/" + email);
  }

}
