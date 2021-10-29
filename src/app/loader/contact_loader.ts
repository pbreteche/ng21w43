import {Contact} from "../model/contact";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactLoader {
  data: Contact[] = [];
  loading = false;
  currentId?: number;
  currentSubject = new BehaviorSubject<Contact|undefined>(undefined);

  constructor(private http: HttpClient) {
  }

  load(): Contact[] {
    if (0 == this.data.length && !this.loading) {
      this.loading = true;
      this.http.get('assets/contacts.json')
        .pipe(
          catchError((err: HttpErrorResponse) => {
            if (404 == err.status) {
              return throwError('La resource n\'a pas été trouvée')
            }

            return throwError('Un erreur s\'est produite, merci de réessayer ultérieurement')
          })
        )
        .subscribe((body: any) => {
          body.data.forEach(
            (item: any) => {
              const newContact = Object.assign(new Contact(), item);
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
    this.data.push(contact);
  }
}
