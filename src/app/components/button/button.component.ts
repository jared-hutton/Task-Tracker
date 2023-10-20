import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = 'DEFAULT TEXT';
  @Input() color: string = 'black';

  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
