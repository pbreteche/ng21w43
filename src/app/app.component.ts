import { Component } from '@angular/core';
import {TitleService} from "./title.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title$: Observable<string>;

  constructor(titleService: TitleService) {
    this.title$ = titleService.title$;
  }
}
