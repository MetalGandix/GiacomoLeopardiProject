import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-visitatore',
  templateUrl: './info-visitatore.component.html',
  styleUrls: ['./info-visitatore.component.css']
})
export class InfoVisitatoreComponent implements OnInit {

  visitor: boolean = false
  constructor() { }

  ngOnInit(): void {
   this.visitor = sessionStorage.getItem("Role") === "ROLE_VISITATORE"
  }

}
