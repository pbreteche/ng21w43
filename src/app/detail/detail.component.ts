import { Component } from '@angular/core';
import {Contact} from "../model/contact";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ContactLoader} from "../loader/contact_loader";
import {TitleService} from "../title.service";
import {switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  contact$: Observable<Contact>;
  loader = new ContactLoader();

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService
  ) {
    this.contact$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.loader.loadById(+params.get('id')!)
      )
    );
  }
}
