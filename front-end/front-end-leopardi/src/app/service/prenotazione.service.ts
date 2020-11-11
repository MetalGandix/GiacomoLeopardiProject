import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prenotazione } from '../class/prenotazione';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/visita';
  }

 // public findAll(): Observable<User[]> {
 //   return this.http.get<User[]>(this.usersUrl);
  //}
 
  public save(prenotazione: Prenotazione) {
    return this.http.post<Prenotazione>(this.url, prenotazione);
  }

}
