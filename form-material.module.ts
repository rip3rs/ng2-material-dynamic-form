import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialImportModule } from "../../modules/material-import/material-import.module";

import { FormComponent } from './components/form/form.component';
import { InputChooserService } from "./services/input-chooser.service";

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule
  ],
  exports: [
    FormComponent,
  ],
  providers: [
    InputChooserService
  ],
})
export class FormMaterialModule { }
