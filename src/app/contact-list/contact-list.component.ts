import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Contact } from "../model/contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input()
  contacts: Contact[] = [];

  @Output('contactSelected')
  emitter = new EventEmitter<Contact>();

  select(contact: Contact) {
    this.emitter.emit(contact);
  }
}
