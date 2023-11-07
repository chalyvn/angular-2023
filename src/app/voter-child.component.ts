import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-voter-child',
  template: `
    <h4>{{name}}</h4>
    <button type="button" (click)="vote(true)"  [disabled]="didVote">Agree</button>
    <button type="button" (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})

export class VoterChildComponent {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
