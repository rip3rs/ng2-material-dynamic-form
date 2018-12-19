import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputChooserService } from "../../services/input-chooser.service";
import { InputInterface } from "../../models/input.interface";

@Component({
  selector: 'ng2-material-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})
export class DyFormComponent implements OnInit {
  @Input() formData:InputInterface[];
  @Output() output:EventEmitter<any> = new EventEmitter();
  form:FormGroup;

  constructor(public inputGroup:InputChooserService) {
  }

  ngOnInit() {
    this.form = this.inputGroup.buildFormGroup(this.formData)
    console.log('this.form', this.form);

  }

  getType(type:string):string {
    return type ? type : 'input';
  }

  onSubmit(e:any) {
    console.log(e);
    this.output.emit(e);
  }
}
