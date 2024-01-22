import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast" [ngClass]="{'show': show}" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="mr-auto">Success</strong>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
    </div>
  `,
  styles: [`
    .toast {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px;
    }
  `]
})
export class ToastComponent {
  @Input() show: boolean = false;
  @Input() message: string = '';

  closeToast() {
    this.show = false;
  }
}
