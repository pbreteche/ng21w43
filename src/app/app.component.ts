import { Component, OnInit } from '@angular/core';
import { Contact } from './model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  current?: Contact;
  contacts: Contact[] = [];

  ngOnInit(): void {
    const contact = new Contact();
    contact.firstName = 'Tony';
    contact.lastName = 'Stark';
    contact.email = 'tony@stark.com';

    this.contacts.push(contact);
    this.current = contact;
  }

  changeEmail(newEmail: string): void {
    if (this.current) {
      this.current.email = newEmail;
    }
  }
}
