import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prenotazione } from '../class/prenotazione';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public findAll(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.url + "vediVisite");
  }

  public save(prenotazione: Prenotazione) {
    return this.http.post<Prenotazione>(this.url + "visita", prenotazione);
  }

}
