import {Contact} from "../model/contact";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ContactLoader {

  data: Contact[] = [];

  load(): Contact[] {
    if (0 == this.data.length) {
      this.data = [
        Object.assign(new Contact(), { id: 0, lastName: 'Lee', firstName: 'Bruce', email: 'blee@kung.fu', state: 'draft'}),
        Object.assign(new Contact(), { id: 1, lastName: 'Stark', firstName: 'Tony', email: 'tony@stark.com', state: 'active'}),
        Object.assign(new Contact(), { id: 2, lastName: 'Queen', firstName: 'Oliver', email: 'green@arrow.us', state: 'active'}),
        Object.assign(new Contact(), { id: 3, lastName: 'Balmer', firstName: 'Steve', email: 'balmer@micro.soft', state: 'inactive'}),
      ];
    }

    return this.data;
  }

  loadById(id: number): Observable<Contact> {
    if (0 == this.data.length) {
      this.load();
    }

    return of(this.data[id]);
  }

  save(contact: Contact) {
    contact.id = this.data.length;
    this.data.push(contact);
  }
}
