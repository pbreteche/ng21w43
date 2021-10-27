import { Component } from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactLoader} from "../../loader/contact_loader";

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
  contact = new Contact();

  constructor(private contactLoader: ContactLoader) {
  }

  save() {
    this.contactLoader.save(this.contact);
    this.contact = new Contact();
  }
}
