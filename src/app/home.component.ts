import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h3>Contacts</h3>
      <div>
        <a *ngFor="let contact of contacts" routerLink="about/{{ contact.id }}">
          {{ contact.name }}
        </a>
      </div>
    </div>
  `,
  providers: [ContactService]
})
export class HomeComponent {
  contacts = [];
  constructor(private contactService: ContactService) {
    this.contactService.getAllContacts()
    .then(contacts => this.contacts = contacts);
  }
}
