import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

import { UserListComponent } from './user-list/user-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CounterComponent, UserListComponent,MatListModule,
    MatButtonModule]
})
export class AppComponent {
  title = 'angularapp';

  handleInputValue(value: string) {
    console.log(value);
  }

  users = ["shota","gela","vaja","nika","dato","Shalo","melo",'sofo'];

}