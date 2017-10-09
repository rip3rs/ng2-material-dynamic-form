import { Component, Input} from '@angular/core';
import { InputInterface } from "../../../models/input.interface";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'dy-date-picker',
  templateUrl: 'date-picker.component.html',
  styleUrls: ['date-picker.component.scss']
})
export class DyDatePickerComponent {
  @Input() params:InputInterface;
  @Input() formGroup:FormGroup;

  constructor() {
  }
}
