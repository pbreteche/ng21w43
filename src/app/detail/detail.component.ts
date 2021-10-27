import {Component, OnInit} from '@angular/core';
import {Contact} from "../model/contact";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ContactLoader} from "../loader/contact_loader";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  contact?: Contact;
  loader = new ContactLoader();
  id: any = null;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = params.get('id');
        this.contact = this.loader.loadById(this.id);
    })
  }
}
