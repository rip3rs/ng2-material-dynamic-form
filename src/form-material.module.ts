import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialImportModule } from "ng2-material-import";
import { InputChooserService } from "./services/input-chooser.service";

import { DyFormComponent } from './components/form/form.component';
import { DyInputComponent } from './components/form/input/input.component';
import { DyCheckboxComponent } from './components/form/checkbox/checkbox.component';
import { DySliderComponent } from './components/form/slider/slider.component';
import { DySlideToggleComponent } from './components/form/slide-toggle/slide-toggle.component';
import { DySelectComponent } from './components/form/select/select.component';
import { DyRadioComponent } from './components/form/radio/radio.component';
import { DyDatePickerComponent } from './components/form/date-picker/date-picker.component';

@NgModule({
  declarations: [
    DyFormComponent,
    DyInputComponent,
    DyCheckboxComponent,
    DySliderComponent,
    DySlideToggleComponent,
    DySelectComponent,
    DyRadioComponent,
    DyDatePickerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule
  ],
  exports: [
    DyFormComponent
  ],
  providers: [
    InputChooserService
  ],
})
export class FormMaterialModule { }
