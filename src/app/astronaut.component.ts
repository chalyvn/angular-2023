import {Component, Input, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {MissionService} from "./mission.service";

@Component({
  selector: 'app-astronaut',
  template: `
  <p>{{astronaut}}: <b>{{mission}}</b>
    <button
      type="button"
      (click)="confirm()"
      [disabled]="!announced || confirmed">
      Confirm
    </button>
  </p>`
})
export class AstronautComponent implements OnDestroy {
  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
      }
    )
  }
  confirm(){
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
