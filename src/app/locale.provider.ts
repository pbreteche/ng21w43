import { LOCALE_ID, Provider } from '@angular/core';
import { LocaleService } from './locale.service';

export class LocaleId extends String {
  constructor(private localeService: LocaleService) {
    super();
    this.localeService.initLocale('fr');
  }

  toString(): string {
    return this.localeService.currentLocale;
  }

  valueOf(): string {
    return this.toString();
  }
}

export const LocaleProvider: Provider = {
  provide: LOCALE_ID,
  useClass: LocaleId,
  deps: [LocaleService],
};
