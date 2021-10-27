import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/contact";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.scss']
})
export class CreateReactiveComponent implements OnInit {

  contact = new Contact();
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z0-9]+$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^@]+@[^@]+\.[a-z]{2,}$/),
    ]),
  });

  ngOnInit(): void {

  }

}
