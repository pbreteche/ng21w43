import {Contact} from "../model/contact";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {ManagedContact} from "../model/managed-contact";
import {API_HOST} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class ContactLoader {
  data: ManagedContact[] = [];
  loading = false;
  currentId?: number;
  currentSubject = new BehaviorSubject<Contact|undefined>(undefined);

  constructor(
    private http: HttpClient,
    @Inject(API_HOST)private host: string
  ) { }

  load(): Contact[] {
    if (0 == this.data.length && !this.loading) {
      this.loading = true;
      this.http.get('assets/contacts.json')
        .toPromise()
        .catch((err: HttpErrorResponse) => {
          if (404 == err.status) {
            return throwError('La resource n\'a pas été trouvée')
          }

          return throwError('Un erreur s\'est produite, merci de réessayer ultérieurement')
        })
        .then((body: any) => {
          body.data.forEach(
            (item: any) => {
              const newContact = Object.assign(new ManagedContact(), item);
              newContact.persistState = 'not modified';
              this.data.push(newContact);
            }
          )
          this.loading = false;
          if (this.currentId !== undefined) {
            this.currentSubject.next(this.data[this.currentId]);
          }
        })
    }

    return this.data;
  }

  loadById(id: number): Observable<Contact|undefined> {
    if (id != this.currentId) {
      this.currentId = id;
      this.currentSubject.next(this.data[id]);
    }
    this.load();

    return this.currentSubject.asObservable();
  }

  save(contact: Contact) {
    contact.id = this.data.length;
    const newContact = Object.assign(new ManagedContact(), contact);

    this.data.push(newContact);
  }

  upload() {
    const contactToUpload = this.data.filter(
      (contact: ManagedContact) => contact.persistState == 'new'
    );

    contactToUpload.forEach((contact: ManagedContact) => {
      this.http.post('contacts', contact)
        .subscribe((data: any) => console.log(data))
    });
  }
}
