import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactLoader } from '../loader/contact_loader';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  loader = new ContactLoader();

  ngOnInit(): void {
    this.contacts = this.loader.load();
  }
}
