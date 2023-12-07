import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {CountdownTimerComponent} from "./countdown-timer.component";

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button type="button" (click)="start()">Start</button>
    <button type="button" (click)="stop()">Stop</button>
    <h1 style="color: red">{{second()}}</h1>
    <app-countdown-timer></app-countdown-timer>
  `
})
export class CountdownViewChildParentComponent implements AfterViewInit{
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;
  second() { return 0;}
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.second = () => this.timerComponent.seconds,0);
  }

  start() {this.timerComponent.start();}
  stop() {this.timerComponent.stop();}
}
