import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-poesia',
  templateUrl: './poesia.component.html',
  styleUrls: ['./poesia.component.css']
})
export class PoesiaComponent{

  isTextVisible = true;
  
  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, { static: true })
  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }

  toggle = true;
  toggle1 = true;
  toggle2 = true;
  toggle3 = true;
  toggle4 = true;
  toggle5 = true;
  toggle6 = true;
  toggle7 = true;
  toggle8 = true;
  toggle9 = true;
  
  status = "";
  status1 = "";
  status2 = "";
  status3 = "";
  status4 = "";
  status5 = "";
  status6 = "";
  status7 = "";
  status8 = "";
  status9 = "";
  
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "" : "";
  }

  enableDisableRule1() {
    this.toggle1 = !this.toggle1;
    this.status1 = this.toggle1 ? "" : "";
  }

  enableDisableRule2() {
    this.toggle2 = !this.toggle2;
    this.status2 = this.toggle2 ? "" : "";
  }

  enableDisableRule3() {
    this.toggle3 = !this.toggle3;
    this.status3 = this.toggle3 ? "" : "";
  }

  enableDisableRule4() {
    this.toggle4 = !this.toggle4;
    this.status4 = this.toggle4 ? "" : "";
  }

  enableDisableRule5() {
    this.toggle5 = !this.toggle5;
    this.status5 = this.toggle5 ? "" : "";
  }

  enableDisableRule6() {
    this.toggle6 = !this.toggle6;
    this.status6 = this.toggle6 ? "" : "";
  }

  enableDisableRule7() {
    this.toggle7 = !this.toggle7;
    this.status7 = this.toggle7 ? "" : "";
  }

  enableDisableRule8() {
    this.toggle8 = !this.toggle8;
    this.status8 = this.toggle8 ? "" : "";
  }

  enableDisableRule9() {
    this.toggle9 = !this.toggle9;
    this.status9 = this.toggle9 ? "" : "";
  }
}