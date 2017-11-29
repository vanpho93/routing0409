import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h3>Contacts</h3>
      <div>
        <a *ngFor="let contact of contacts" routerLink="about/{{ contact.name }}">
          {{ contact.name }}
        </a>
      </div>
    </div>
  `,
})
export class HomeComponent {
  contacts = [
    { name: 'Teo', phoneNumber: '098173827183' },
    { name: 'Ti', phoneNumber: '098122312343' },
    { name: 'Tun', phoneNumber: '098173381843' },
  ];
}
