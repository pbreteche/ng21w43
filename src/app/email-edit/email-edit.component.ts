import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-email-edit',
  templateUrl: './email-edit.component.html',
  styleUrls: ['./email-edit.component.scss']
})
export class EmailEditComponent {
  @Output('emailEdited')
  emitter = new EventEmitter<string>();

  onEmailEdit(value: string) {
    this.emitter.emit(value);
  }
}
