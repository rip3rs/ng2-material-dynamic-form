import { Component, OnInit, Input, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputChooserService } from "../../services/input-chooser.service";
import { InputInterface } from "../../models/input.interface";

@Component({
  selector: 'ng2-material-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class DyFormComponent implements OnInit {
  @Input() formData:InputInterface[];

  public form:FormGroup;

  constructor(private inputGroup:InputChooserService) {
  }

  ngOnInit() {
    this.form = this.inputGroup.buildFormGroup(this.formData)
    console.log('this.form', this.form);

  }

  private getType(type:string):string {
    return type ? type : 'input';
  }
}
