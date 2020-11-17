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

}