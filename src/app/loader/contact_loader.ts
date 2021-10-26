import {Contact} from "../model/contact";

export class ContactLoader {

  load(): Contact[] {
    return [
      Object.assign(new Contact(), { lastName: 'Lee', firstName: 'Bruce', email: 'blee@kung.fu'}),
      Object.assign(new Contact(), { lastName: 'Stark', firstName: 'Tony', email: 'tony@stark.com'}),
      Object.assign(new Contact(), { lastName: 'Queen', firstName: 'Oliver', email: 'green@arrow.us'}),
      Object.assign(new Contact(), { lastName: 'Balmer', firstName: 'Steve', email: 'balmer@micro.soft'}),
    ];
  }
}
