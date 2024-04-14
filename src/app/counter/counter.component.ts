import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true, 
  imports: [],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss' ]
})
export class CounterComponent {

  @Input() initialValue: number = 0; 
  @Output() valueChanged = new EventEmitter<number>(); 

  counterValue: number = this.initialValue;

  increment() {
    this.counterValue++;
    this.valueChanged.emit(this.counterValue); 
  }

  decrement() {
    this.counterValue--;
    this.valueChanged.emit(this.counterValue); 
  }
}