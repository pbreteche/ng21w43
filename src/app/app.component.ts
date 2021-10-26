import { Component, OnInit } from '@angular/core';
import { Contact } from './model/contact';
import {ContactLoader} from "./loader/contact_loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  current?: Contact;
  contacts: Contact[] = [];
  loader = new ContactLoader();

  ngOnInit(): void {
    this.contacts = this.loader.load();
    if (1 < this.contacts.length) {
      this.current = this.contacts[0];
    }
  }

  changeEmail(newEmail: string): void {
    if (this.current) {
      this.current.email = newEmail;
    }
  }
}
