import { Component } from '@angular/core';
import {TitleService} from "./title.service";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title$: Observable<string>;
  today = new Date();
  price = 12345.67;
  env = environment;

  constructor(titleService: TitleService) {
    this.title$ = titleService.title$;
  }
}
