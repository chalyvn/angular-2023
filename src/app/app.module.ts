import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroParentComponent} from './hero-parent/hero-parent.component';
import {HeroChildComponent} from './hero-child/hero-child.component';
import {NameChildComponent} from "./name-child.component";
import {NameParentComponent} from "./name-parent.component";
import {VersionChildComponent} from "./version-child.component";
import {VersionParentComponent} from "./version-parent.component";
import {VoterChildComponent} from "./voter-child.component";
import {VoteTakerParentComponent} from "./votetaker-parent.component";
import {CountdownTimerComponent} from "./countdown-timer.component";
import {CountdownParentComponent} from "./countdown-parent.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterChildComponent,
    VoteTakerParentComponent,
    CountdownTimerComponent,
    CountdownParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
