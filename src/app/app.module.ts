import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { EmailEditComponent } from './email-edit/email-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    EmailEditComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ContactListComponent },
      { path: ':id', component: DetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
