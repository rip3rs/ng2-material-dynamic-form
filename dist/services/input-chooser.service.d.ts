import { InputInterface } from "../models/input.interface";
import { FormGroup } from "@angular/forms";
export declare class InputChooserService {
    constructor();
    buildFormGroup(inputsSettings: InputInterface[]): FormGroup;
}
