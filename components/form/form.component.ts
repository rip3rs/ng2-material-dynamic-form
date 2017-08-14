import { Component, OnInit, Input, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputChooserService } from "../../services/input-chooser.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formData;

  public form:FormGroup;

  constructor(private inputGroup:InputChooserService) {
  }

  ngOnInit() {
    this.form = this.inputGroup.buildFormGroup(this.formData)
  }

  log(log) {
    console.log(log);
  }

}
