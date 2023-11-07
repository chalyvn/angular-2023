import {Component} from "@angular/core";

@Component({
  selector: 'app-countdown-parent',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button type="button" (click)="timer.start()">Start</button>
    <button type="button" (click)="timer.stop()">Stop</button>
    <h1 style="color: red">{{timer.seconds}}</h1>
    <app-countdown-timer #timer></app-countdown-timer>
  `
})
export class CountdownParentComponent {}
