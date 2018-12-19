import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputChooserService } from "../../services/input-chooser.service";
import { InputInterface } from "../../models/input.interface";
export declare class DyFormComponent implements OnInit {
    inputGroup: InputChooserService;
    formData: InputInterface[];
    output: EventEmitter<any>;
    form: FormGroup;
    constructor(inputGroup: InputChooserService);
    ngOnInit(): void;
    getType(type: string): string;
    onSubmit(e: any): void;
}
