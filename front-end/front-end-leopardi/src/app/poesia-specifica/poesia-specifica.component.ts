import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poesia } from '../class/poesia';
import { PoesiaService } from '../service/poesia.service';

@Component({
  selector: 'app-poesia-specifica',
  templateUrl: './poesia-specifica.component.html',
  styleUrls: ['./poesia-specifica.component.css']
})
export class PoesiaSpecificaComponent implements OnInit {

  constructor(private service: PoesiaService, private router: Router) {
  }

  poesie: Poesia[]
  poesiaSpecifica: Poesia[]
  boo1: boolean = false
  boo2: boolean = false
  titoloPoesia: string

  ngOnInit(){
    this.service.findAll().subscribe(poesiaSingola => {
      this.poesie = poesiaSingola
    })
  }

  filtra(){
   this.boo2 = true
   console.log(this.titoloPoesia)
   this.service.findPoesiaSingola(this.titoloPoesia).subscribe(a => {
     this.poesie = a
   })
  }

  bottoneTrue(){
    this.boo1 = true
  }

  bottoneFalse(){
    this.boo1 = false
  }

}
