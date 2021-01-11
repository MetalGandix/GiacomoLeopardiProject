import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poesia } from '../class/poesia';

@Injectable({
  providedIn: 'root'
})
export class PoesiaService {

  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public findAll(): Observable<Poesia[]> {
    return this.http.get<Poesia[]>(this.url + "getPoesie");
  }

  public findPoesiaSingola(titolo: string): Observable<Poesia[]> {
    return this.http.get<Poesia[]>(this.url + "getPoesia/" + titolo);
  }

  public findPoesiaSingolaByCapitolo(capitolo: number): Observable<Poesia[]> {
    return this.http.get<Poesia[]>(this.url + "poesia/" + capitolo);
  }

  public inserisciPoesia(poesia: Poesia) {
    return this.http.post<Poesia>(this.url + "inserisciPoesia", poesia)
  }
}