import {Contact} from "../model/contact";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactLoader {

  data: Contact[] = [];
  loading = false;

  constructor(private http: HttpClient) {
  }

  load(): Contact[] {
    if (0 == this.data.length && !this.loading) {
      this.loading = true;
      this.http.get('assets/contacts.json')
        .subscribe((body: any) => {
          body.data.forEach(
            (item: any) => {
              const newContact = Object.assign(new Contact(), item);
              this.data.push(newContact);
            }
          )
          this.loading = false;
        })
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
