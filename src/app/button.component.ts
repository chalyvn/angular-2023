import {Component, Input} from "@angular/core";

@Component({
  selector: 'my-button',
  styles: [
    `
      button {
        all: unset;
        padding: 1em 1.5em;
        cursor: pointer;
        background: var(--button-bg, #fd7e14);
        color: var(--button-color, #fff);
      }

      button:hover {
        background: var(--button-bg--hover, #1a4480);
      }

      button:active {
        background: var(--button-bg--active, #162e51);
      }

      :host(.success) button {
        --button-bg: #3cb878;
        --button-bg--hover: #297e52;
        --button-bg--active: #16452d;
      }

      button.danger {
        --button-bg: #ff2121;
        --button-bg--hover: #d11500;
        --button-bg--active: #d11500;
      }
    `
  ],
  template: `
  <button [ngClass]="theme">
    <ng-content></ng-content>
  </button>
  `
})
export class ButtonComponent {
  @Input() theme: 'default' | 'danger' | 'warning' = 'default'
}
