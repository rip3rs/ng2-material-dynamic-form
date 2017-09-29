import { Component, Input} from '@angular/core';
import { InputInterface } from "../../../models/input.interface";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'dy-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class DyRadioComponent {
  @Input() params:InputInterface;
  @Input() formGroup:FormGroup;

  constructor() {
  }
}
