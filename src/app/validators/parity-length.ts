import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function parityLength(odd = false): ValidatorFn {
  const parityRefValue = odd ? 1 : 0;

  return (control: AbstractControl): ValidationErrors | null => {
    const parity = parityRefValue == control.value.length % 2;

    return parity ? null : { parityLength: { value: control.value, length: control.value.length } };
  }
}
