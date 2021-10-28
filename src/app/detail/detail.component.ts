import {Component, OnDestroy } from '@angular/core';
import {Contact} from "../model/contact";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ContactLoader} from "../loader/contact_loader";
import {TitleService} from "../title.service";
import { switchMap } from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnDestroy {
  contact$: Observable<Contact>;
  lang = 'fr';

  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService,
    private loader: ContactLoader
  ) {
    this.contact$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.loader.loadById(+params.get('id')!)
      )
    );

    this.route.queryParamMap.subscribe((params: ParamMap) =>
      this.lang = params.get('lang')!
    );

    this.contact$.subscribe((contact: Contact) => {
      this.titleService.title = contact.firstName+' '+contact.lastName;
    });
  }

  ngOnDestroy(): void {
    this.titleService.unset();
  }
}
