import { CommonModule } from '@angular/common';
import { MaterialImportModule } from 'ng2-material-import';
import { Injectable, Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputChooserService {
    constructor() { }
    /**
     * @param {?} inputsSettings
     * @return {?}
     */
    buildFormGroup(inputsSettings) {
        /** @type {?} */
        let group = {};
        inputsSettings.forEach(inputSetting => {
            console.log(inputSetting.attr);
            group[inputSetting.attr] = inputSetting.required ?
                new FormControl(inputSetting.value || '', Validators.required) :
                new FormControl(inputSetting.value || '');
        });
        return new FormGroup(group);
    }
}
InputChooserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InputChooserService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DyFormComponent {
    /**
     * @param {?} inputGroup
     */
    constructor(inputGroup) {
        this.inputGroup = inputGroup;
        this.output = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.inputGroup.buildFormGroup(this.formData);
        console.log('this.form', this.form);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getType(type) {
        return type ? type : 'input';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onSubmit(e) {
        console.log(e);
        this.output.emit(e);
    }
}
DyFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-material-form',
                template: "<form *ngIf=\"formData\" (submit)=\"onSubmit(form.value)\" [formGroup]=\"form\">\n  <div class=\"form-group\" *ngFor=\"let param of formData\">\n    <dy-checkbox *ngIf=\"getType(param.type) == 'checkbox'\" [params]=\"param\" [formGroup]=\"form\"></dy-checkbox>\n    <!-- <dy-checkbox-list *ngIf=\"getType(param.type) == 'checkbox-list'\" [params]=\"param\" [formGroup]=\"form\"></dy-checkbox-list> -->\n    <dy-date-picker *ngIf=\"getType(param.type) == 'date-picker'\" [params]=\"param\" [formGroup]=\"form\"></dy-date-picker>\n    <dy-input *ngIf=\"getType(param.type) == 'input'\" [params]=\"param\" [formGroup]=\"form\"></dy-input>\n    <dy-radio *ngIf=\"getType(param.type) == 'radio'\" [params]=\"param\" [formGroup]=\"form\"></dy-radio>\n    <!-- <dy-radio-list *ngIf=\"getType(param.type) == 'radio-list'\" [params]=\"param\" [formGroup]=\"form\"></dy-radio-list> -->\n    <dy-select *ngIf=\"getType(param.type) == 'select'\" [params]=\"param\" [formGroup]=\"form\"></dy-select>\n    <dy-slide-toggle *ngIf=\"getType(param.type) == 'slide-toggle'\" [params]=\"param\" [formGroup]=\"form\"></dy-slide-toggle>\n    <dy-slider *ngIf=\"getType(param.type) == 'slider'\" [params]=\"param\" [formGroup]=\"form\"></dy-slider>\n  </div>\n  <button>Submit</button>\n</form>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DyFormComponent.ctorParameters = () => [
    { type: InputChooserService }
];
DyFormComponent.propDecorators = {
    formData: [{ type: Input }],
    output: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DyInputComponent {
    constructor() {
    }
}
DyInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'dy-input',
                template: "<mat-form-field [formGroup]=\"formGroup\" floatPlaceholder=\"auto\" class=\"input\">\n  <input matInput type=\"{{params.type}}\" formControlName=\"{{params.attr}}\" placeholder=\"{{params.alias}}\">\n</mat-form-field>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DyInputComponent.ctorParameters = () => [];
DyInputComponent.propDecorators = {
    params: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DyCheckboxComponent {
    constructor() {
    }
}
DyCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'dy-checkbox',
                template: "<div class=\"checkbox\" [formGroup]=\"formGroup\">\n  <mat-checkbox formControlName=\"{{params.attr}}\">{{params.alias}}</mat-checkbox>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DyCheckboxComponent.ctorParameters = () => [];
DyCheckboxComponent.propDecorators = {
    params: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DySliderComponent {
    constructor() {
    }
}
DySliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'dy-slider',
                template: "<div class=\"slider-container\" [formGroup]=\"formGroup\">\n  <mat-slider\n      class=\"slider\"\n      formControlName=\"{{params.attr}}\"\n      [disabled]=\"params.settings.disabled\"\n      [invert]=\"params.settings.invert\"\n      [max]=\"params.settings.max\"\n      [min]=\"params.settings.min\"\n      [step]=\"params.settings.step\"\n      [thumbLabel]=\"params.settings.thumbLabel\"\n      [tickInterval]=\"params.settings.tickInterval\"\n      [vertical]=\"params.settings.vertical\">\n  </mat-slider>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DySliderComponent.ctorParameters = () => [];
DySliderComponent.propDecorators = {
    params: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DySlideToggleComponent {
    constructor() {
    }
}
DySlideToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'dy-slide-toggle',
                template: "<div class=\"slide-toggle-container\" [formGroup]=\"formGroup\">\n    {{params.attr}}\n    {{params.settings.checked}}\n  <mat-slide-toggle\n      class=\"slide-toggle\"\n      formControlName=\"{{params.attr}}\"\n      checked=false\n      [disabled]=\"params.settings.disabled\">\n      {{params.alias}}\n  </mat-slide-toggle>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DySlideToggleComponent.ctorParameters = () => [];
DySlideToggleComponent.propDecorators = {
    params: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DySelectComponent {
    constructor() {
    }
}
DySelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'dy-select',
                template: "<div class=\"select-container\" [formGroup]=\"formGroup\">\n  <mat-select placeholder=\"{{params.alias}}\" formControlName=\"{{params.attr}}\">\n    <mat-option *ngFor=\"let option of params.options\" [value]=\"option.value\">\n      {{option.key}}\n    </mat-option>\n  </mat-select>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DySelectComponent.ctorParameters = () => [];
DySelectComponent.propDecorators = {
    params: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DyRadioComponent {
    constructor() {
    }
}
DyRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'dy-radio',
                template: "<div class=\"radio-group-container\" [formGroup]=\"formGroup\">\n  <mat-radio-group class=\"radio\"  formControlName=\"{{params.attr}}\">\n    <mat-radio-button\n      class=\"radio-button\"\n      *ngFor=\"let option of params.options\"\n      [value]=\"option.key\">\n        {{option.value}}\n    </mat-radio-button>\n  </mat-radio-group>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DyRadioComponent.ctorParameters = () => [];
DyRadioComponent.propDecorators = {
    params: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DyDatePickerComponent {
    constructor() {
    }
}
DyDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'dy-date-picker',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"{{params.alias}}\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
DyDatePickerComponent.ctorParameters = () => [];
DyDatePickerComponent.propDecorators = {
    params: [{ type: Input }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormMaterialModule {
}
FormMaterialModule.decorators = [
    { type: NgModule, args: [{
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
                    FormsModule,
                    ReactiveFormsModule,
                    MaterialImportModule
                ],
                exports: [
                    DyFormComponent,
                    DyInputComponent,
                    DyCheckboxComponent,
                    DySliderComponent,
                    DySlideToggleComponent,
                    DySelectComponent,
                    DyRadioComponent
                ],
                providers: [
                    InputChooserService
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FormMaterialModule, DyCheckboxComponent as ɵd, DyDatePickerComponent as ɵi, DyFormComponent as ɵa, DyInputComponent as ɵc, DyRadioComponent as ɵh, DySelectComponent as ɵg, DySlideToggleComponent as ɵf, DySliderComponent as ɵe, InputChooserService as ɵb };

//# sourceMappingURL=ng2-material-dynamic-form.js.map