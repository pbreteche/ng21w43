import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailMask'
})
export class EmailMaskPipe implements PipeTransform {

  transform(value?: string): string {
    if (!value) {
      return '';
    }
    return value.replace('@', '_AT_').replace('.', '_DOT_');
  }
}
