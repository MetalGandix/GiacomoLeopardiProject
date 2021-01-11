import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

  }

  bottoneCliccato: boolean = false
  visita: boolean
  aggiunta: boolean

  visitaGuidataMethod() {
    this.visita = true
    this.aggiunta = true
    this.bottoneCliccato = true
  }

  visitaSingolaMethod() {
    this.visita = true
    this.aggiunta = false
    this.bottoneCliccato = true
  }

  ngOnInit() {
    
  }
}