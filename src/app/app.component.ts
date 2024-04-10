import { Component } from '@angular/core';
import {CounterComponent} from "./counter/counter.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [
    CounterComponent,]
})
export class AppComponent {
  onValueChange(value: number) {
    console.log(`Value changed to: ${value}`);
  }
}