import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

const DEFAULT_TITLE = 'Carnet d\'adresse';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject<string>(DEFAULT_TITLE);

  constructor() { }

  get title$(): Observable<string> {
    return this.titleSubject.asObservable();
  }

  set title(title: string) {
    this.titleSubject.next(title);
  }

  unset(): void {
    this.titleSubject.next(DEFAULT_TITLE);
  }
}
