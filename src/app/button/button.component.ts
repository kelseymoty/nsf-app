import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttons: string[];
  @Output() response = new EventEmitter<string>();

  constructor() {
    console.log("buttons are", this.buttons);
  }

  setValue(value) {
    this.response.emit(value);
    console.log("button value recorded asF", this.response)
  }

}
