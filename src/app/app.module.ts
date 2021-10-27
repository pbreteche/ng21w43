import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { EmailEditComponent } from './email-edit/email-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateTemplateComponent } from './form/create-template/create-template.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    EmailEditComponent,
    ContactListComponent,
    CreateTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ContactListComponent },
      { path: 'new', component: CreateTemplateComponent },
      { path: ':id', component: DetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
