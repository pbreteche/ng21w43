import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-email-edit',
  templateUrl: './email-edit.component.html',
  styleUrls: ['./email-edit.component.scss']
})
export class EmailEditComponent {
  @Output('emailEdited')
  emitter = new EventEmitter<string>();
  lastError = '';

  onEmailEdit(value: string): void {
    const EMAIL_PATTERN = /\S+@\S+\.\S+/;

    if (!EMAIL_PATTERN.test(value)) {
      this.lastError = 'Email invalide';
      return;
    }

    this.lastError = '';
    this.emitter.emit(value);
  }
}
