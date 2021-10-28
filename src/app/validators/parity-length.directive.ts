import {AbstractControl, ValidationErrors} from "@angular/forms";

export function parityLength(control: AbstractControl): ValidationErrors | null {
  const parity = 0 == control.value.length % 2;

  return parity ? null : { parityLength: { value: control.value, length: control.value.length } };
}
