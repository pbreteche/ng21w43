import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import '@angular/common/locales/global/fr';
import '@angular/common/locales/global/de';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { EmailEditComponent } from './email-edit/email-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateTemplateComponent } from './form/create-template/create-template.component';
import { CreateReactiveComponent } from './form/create-reactive/create-reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AdminGuard} from "./admin.guard";
import { ContactAreaComponent } from './contact-area/contact-area.component';
import { ParityLengthDirective } from './validators/parity-length.directive';
import { EmailMaskPipe } from './pipes/email-mask.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {TitleService} from "./title.service";

export const API_HOST = new InjectionToken('app.api_host');

const titleServiceFactory = function (option: string): TitleService {
  // process option
  return new TitleService();
}

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    EmailEditComponent,
    ContactListComponent,
    CreateTemplateComponent,
    CreateReactiveComponent,
    PageNotFoundComponent,
    ContactAreaComponent,
    ParityLengthDirective,
    EmailMaskPipe,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/contacts', pathMatch: 'full'},
      // ContactArea factorise les variables d'état des composants enfants
      //    fournit un nouveau <router-outlet>
      {
        path: 'contacts', component: ContactAreaComponent,
        children: [
          {path: '', component: ContactListComponent},
          {path: 'new', component: CreateTemplateComponent, canActivate: [AdminGuard]},
          {path: ':id', component: DetailComponent},
        ]
      },
      {path: '**', component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    TitleService, // syntaxe courte ClassProvider
    { useClass: TitleService, provide: TitleService }, //syntaxe explicite ClassProvider
    { useExisting: TitleService, provide: TitleService },
    { useValue: 'api.mydomain.com', provide: API_HOST},
    { useFactory: titleServiceFactory, deps: ['my option value'], provide: TitleService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
