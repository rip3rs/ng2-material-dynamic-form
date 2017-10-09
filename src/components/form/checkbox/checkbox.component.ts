import { Component, Input} from '@angular/core';
import { InputInterface } from "../../../models/input.interface";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'dy-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.scss']
})
export class DyCheckboxComponent {
  @Input() params:InputInterface;
  @Input() formGroup:FormGroup;

  constructor() {
  }
}
