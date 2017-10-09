import { Component, Input} from '@angular/core';
import { InputInterface } from "../../../models/input.interface";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'dy-slide-toggle',
  templateUrl: 'slide-toggle.component.html',
  styleUrls: ['slide-toggle.component.scss']
})
export class DySlideToggleComponent {
  @Input() params:InputInterface;
  @Input() formGroup:FormGroup;

  constructor() {
  }
}
