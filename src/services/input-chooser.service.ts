import { Injectable } from '@angular/core';
import { InputInterface } from "../models/input.interface";
import { FormControl, FormGroup, Validators, FormArray } from "@angular/forms";

@Injectable()
export class InputChooserService {

  constructor() { }

  buildFormGroup(inputsSettings: InputInterface[] ) {
    let group: any = {};

    inputsSettings.forEach(inputSetting => {
      console.log(inputSetting.attr)
      group[inputSetting.attr] = inputSetting.required ?
        new FormControl(inputSetting.value || '', Validators.required) :
        new FormControl(inputSetting.value || '');
    });

    return new FormGroup(group);
  }
}
