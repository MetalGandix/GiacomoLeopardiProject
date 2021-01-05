import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../class/evento';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public findEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.url + "vediEventi");
  }

  public saveEvents(evento: Evento) {
    return this.http.post<Evento>(this.url + "inserisciEventi", evento);
  }
}
