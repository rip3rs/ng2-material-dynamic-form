import { Component, Input} from '@angular/core';
import { InputInterface } from "../../../models/input.interface";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'dy-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.scss']
})
export class DySelectComponent {
  @Input() params:InputInterface;
  @Input() formGroup:FormGroup;

  constructor() {
  }
}
