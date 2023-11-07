import {Component, OnDestroy} from "@angular/core";

@Component({
  selector: 'app-countdown-timer',
  template: `<h4 style="color: dodgerblue">{{message}}</h4>`
})
export class CountdownTimerComponent implements OnDestroy {
  message = '';
  seconds = 11;
  ngOnDestroy() {this.clearTime?.();}

  start(){this.countDown();}
  stop(){
    this.clearTime?.();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  private clearTime: VoidFunction | undefined;
  private countDown(){
    this.clearTime?.();
    const interval = setInterval(()=>{
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
    this.clearTime = () => clearInterval(interval);
  }
}
