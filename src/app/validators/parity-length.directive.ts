import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {parityLength} from "./parity-length";

@Directive({
  selector: '[appParityLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: ParityLengthDirective, multi: true}]
})
export class ParityLengthDirective implements Validator {
  @Input('appParityLength') odd = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return parityLength('odd' == this.odd)(control);
  }
}
