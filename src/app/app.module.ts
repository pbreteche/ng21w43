import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { EmailEditComponent } from './email-edit/email-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    EmailEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
