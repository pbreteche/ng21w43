import {Contact} from "../model/contact";

export class ContactLoader {

  load(): Contact[] {
    return [
      Object.assign(new Contact(), { id: 0, lastName: 'Lee', firstName: 'Bruce', email: 'blee@kung.fu'}),
      Object.assign(new Contact(), { id: 1, lastName: 'Stark', firstName: 'Tony', email: 'tony@stark.com'}),
      Object.assign(new Contact(), { id: 2, lastName: 'Queen', firstName: 'Oliver', email: 'green@arrow.us'}),
      Object.assign(new Contact(), { id: 3, lastName: 'Balmer', firstName: 'Steve', email: 'balmer@micro.soft'}),
    ];
  }
}
