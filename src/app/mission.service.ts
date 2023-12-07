import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnounceSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnounceSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission:string){
    this.missionAnnounceSource.next(mission);
  }

  confirmMission(astronaut:string){
    this.missionConfirmedSource.next(astronaut);
  }

}
