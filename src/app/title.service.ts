import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject<string>('Carnet d\'adresse');

  constructor() { }

  get title$(): Observable<string> {
    return this.titleSubject.asObservable();
  }
}
