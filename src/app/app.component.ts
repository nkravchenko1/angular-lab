import { Component } from '@angular/core';
import { RegistrationFormComponent } from './registration-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationFormComponent],
  template: '<app-registration-form></app-registration-form>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
