import { Component, OnInit } from '@angular/core';
import { Contact } from './model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contact = new Contact();

  ngOnInit(): void {
    this.contact.firstName = 'Tony';
    this.contact.lastName = 'Stark';
    this.contact.email = 'tony@stark.com';
  }

  changeEmail(newEmail: string): void {
    this.contact.email = newEmail;
  }
}
