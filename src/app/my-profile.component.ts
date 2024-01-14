import {Component} from "@angular/core";

@Component({
  selector:'my-profile',
  styles: [
    `
     my-button {
        --button-bg: #d83933;
        --button-bg--hover: #b50909;
        --button-bg--active: #8b0a03;
      }
  `
  ],
  template: `
    <div class="container">
      <h2>Profile</h2>
      <my-button>Profile Button</my-button>
    </div>
  `
})
export class MyProfileComponent {}
