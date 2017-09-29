import { Component, Input} from '@angular/core';
import { InputInterface } from "../../../models/input.interface";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'dy-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class DySliderComponent {
  @Input() params:InputInterface;
  @Input() formGroup:FormGroup;

  constructor() {
  }
}
