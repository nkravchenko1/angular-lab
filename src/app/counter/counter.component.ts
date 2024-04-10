import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() initialValue: number = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();


public count: number;

  constructor() {
    this.count = this.initialValue;
  }

  increment() {
    this.count++;
    this.valueChange.emit(this.count);

  }

  decrement() {
    this.count--;
    this.valueChange.emit(this.count);

  }
}