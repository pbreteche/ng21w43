import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/contact";

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
  contact = new Contact();

}
