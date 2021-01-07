import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiventaSocio } from '../class/diventa-socio';
import { DiventaSocioService } from '../service/diventa-socio.service';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  constructor(private service: DiventaSocioService, private route: ActivatedRoute,
    private router: Router) {
      this.modulo = new DiventaSocio()
     }
    
    modulo: DiventaSocio
    diventaSocio: DiventaSocio[]
    logRicevuto: boolean = false

  ngOnInit(){
    this.service.vediModuli().subscribe(moduloSingolo => {
      this.diventaSocio = moduloSingolo
      console.log("Moduli: ",this.diventaSocio)
    })
  }

  OnSubmit(){
    this.service.mandaModulo(this.modulo).subscribe()
    this.logRicevuto = true
  }

}
