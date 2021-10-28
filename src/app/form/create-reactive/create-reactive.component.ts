import { Component } from '@angular/core';
import {Contact} from "../../model/contact";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactLoader} from "../../loader/contact_loader";
import {Router} from "@angular/router";
import {parityLength} from "../../validators/parity-length.directive";

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.scss']
})
export class CreateReactiveComponent {
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      parityLength(true)
    ]
    ),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9]+$/)
    ]),
    email: new FormControl('', [
      Validators.pattern(/^[^@]+@[^@]+\.[a-z]{2,}$/),
    ]),
  });

  constructor(
    private contactLoader: ContactLoader,
    private router: Router
  ) {}

  save() {
    const contact = Object.assign(new Contact(), this.form.getRawValue());
    this.contactLoader.save(contact);
    this.router.navigate(['contacts', contact.id], {queryParams: {lang: 'de'}});
  }
}
