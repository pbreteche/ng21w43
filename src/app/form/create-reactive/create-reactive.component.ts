import { Component } from '@angular/core';
import {Contact} from "../../model/contact";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactLoader} from "../../loader/contact_loader";

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.scss']
})
export class CreateReactiveComponent {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9]+$/)
    ]),
    email: new FormControl('', [
      Validators.pattern(/^[^@]+@[^@]+\.[a-z]{2,}$/),
    ]),
  });

  constructor(private contactLoader: ContactLoader) {
  }

  save() {
    this.contactLoader.save(Object.assign(new Contact(), this.form.getRawValue()));
    this.form.reset();
  }
}
