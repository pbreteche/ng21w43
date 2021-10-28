import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { EmailEditComponent } from './email-edit/email-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateTemplateComponent } from './form/create-template/create-template.component';
import { CreateReactiveComponent } from './form/create-reactive/create-reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AdminGuard} from "./admin.guard";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    EmailEditComponent,
    ContactListComponent,
    CreateTemplateComponent,
    CreateReactiveComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/contacts', pathMatch: 'full' },
      { path: 'contacts', component: ContactListComponent },
      { path: 'new', component: CreateReactiveComponent, canActivate: [AdminGuard] },
      { path: ':id', component: DetailComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
