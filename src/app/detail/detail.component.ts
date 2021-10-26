import { Component, Input } from '@angular/core';
import {Contact} from "../model/contact";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input()
  contact?: Contact;
}
