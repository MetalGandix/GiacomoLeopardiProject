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
  toggle10 = true;
  toggle11 = true;
  toggle12 = true;
  toggle13 = true;
  toggle14 = true;
  toggle15 = true;
  toggle16 = true;
  toggle17 = true;
  toggle18 = true;
  toggle19 = true;
  toggle20 = true;
  toggle21 = true;
  toggle22 = true;
  toggle23 = true;
  toggle24 = true;
  toggle25 = true;
  toggle26 = true;
  toggle27 = true;
  toggle28 = true;
  toggle29 = true;  

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
  status10 = "";
  status11 = "";
  status12 = "";
  status13 = "";
  status14 = "";
  status15 = "";
  status16 = "";
  status17 = "";
  status18 = "";
  status19 = "";
  status20 = "";
  status21 = "";
  status22 = "";
  status23 = "";
  status24 = "";
  status25 = "";
  status26 = "";
  status27 = "";
  status28 = "";
  status29 = "";

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

  enableDisableRule10() {
    this.toggle10 = !this.toggle10;
    this.status10 = this.toggle10 ? "" : "";
  }

  enableDisableRule11() {
    this.toggle11 = !this.toggle11;
    this.status11 = this.toggle11 ? "" : "";
  }

  enableDisableRule12() {
    this.toggle12 = !this.toggle12;
    this.status12 = this.toggle12 ? "" : "";
  }

  enableDisableRule13() {
    this.toggle13 = !this.toggle13;
    this.status13 = this.toggle13 ? "" : "";
  }

  enableDisableRule14() {
    this.toggle14 = !this.toggle14;
    this.status14 = this.toggle14 ? "" : "";
  }

  enableDisableRule15() {
    this.toggle15 = !this.toggle15;
    this.status15 = this.toggle15 ? "" : "";
  }

  enableDisableRule16() {
    this.toggle16 = !this.toggle16;
    this.status16 = this.toggle16 ? "" : "";
  }

  enableDisableRule17() {
    this.toggle17 = !this.toggle17;
    this.status17 = this.toggle17 ? "" : "";
  }

  enableDisableRule18() {
    this.toggle18 = !this.toggle18;
    this.status18 = this.toggle18 ? "" : "";
  }

  enableDisableRule19() {
    this.toggle19 = !this.toggle19;
    this.status19 = this.toggle19 ? "" : "";
  }

  enableDisableRule20() {
    this.toggle20 = !this.toggle20;
    this.status20 = this.toggle20 ? "" : "";
  }

  enableDisableRule21() {
    this.toggle21 = !this.toggle21;
    this.status21 = this.toggle21 ? "" : "";
  }

  enableDisableRule22() {
    this.toggle22 = !this.toggle22;
    this.status22 = this.toggle22 ? "" : "";
  }

  enableDisableRule23() {
    this.toggle23 = !this.toggle23;
    this.status23 = this.toggle23 ? "" : "";
  }

  enableDisableRule24() {
    this.toggle24 = !this.toggle24;
    this.status24 = this.toggle24 ? "" : "";
  }

  enableDisableRule25() {
    this.toggle25 = !this.toggle25;
    this.status25 = this.toggle25 ? "" : "";
  }

  enableDisableRule26() {
    this.toggle26 = !this.toggle26;
    this.status26 = this.toggle26 ? "" : "";
  }

  enableDisableRule27() {
    this.toggle27 = !this.toggle27;
    this.status27 = this.toggle27 ? "" : "";
  }

  enableDisableRule28() {
    this.toggle28 = !this.toggle28;
    this.status28 = this.toggle28 ? "" : "";
  }

  enableDisableRule29() {
    this.toggle29 = !this.toggle29;
    this.status29 = this.toggle29 ? "" : "";
  }

}