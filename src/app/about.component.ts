import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-about',
  template: `
    <div *ngIf="contact">
      <h3>Name: {{contact.name}}</h3>
      <p>Phone: {{contact.phoneNumber}}</p>
    </div>
  `,
  providers: [ContactService]
})

export class AboutComponent {
  contact: any;
  constructor(private route: ActivatedRoute, private contactService: ContactService) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.contactService.getContactById(id)
      .then(contact => this.contact = contact);
    });
  }
}
