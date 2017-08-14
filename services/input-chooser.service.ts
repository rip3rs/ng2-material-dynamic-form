import { Injectable } from '@angular/core';
import { InputInterface } from "../models/input-settings.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class InputChooserService {

  constructor() { }

  buildFormGroup(inputsSettings: InputInterface[] ) {
    let group: any = {};

    inputsSettings.forEach(inputSetting => {
      group[inputSetting.alias] = inputSetting.required ?
        new FormControl(inputSetting.value || '', Validators.required) :
        new FormControl(inputSetting.value || '');
    });
      console.log(group)
    return new FormGroup(group);
  }
}
