import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h3>Home</h3>
    </div>
  `,
})
export class HomeComponent {
  contacts = [];
}
