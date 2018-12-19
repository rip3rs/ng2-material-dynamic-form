/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputChooserService } from "../../services/input-chooser.service";
export class DyFormComponent {
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
if (false) {
    /** @type {?} */
    DyFormComponent.prototype.formData;
    /** @type {?} */
    DyFormComponent.prototype.output;
    /** @type {?} */
    DyFormComponent.prototype.form;
    /** @type {?} */
    DyFormComponent.prototype.inputGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItbWF0ZXJpYWwtZHluYW1pYy1mb3JtLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBUTNFLE1BQU0sT0FBTyxlQUFlOzs7O0lBSzFCLFlBQW1CLFVBQThCO1FBQTlCLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBSHZDLFdBQU0sR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUl4RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxDQUFLO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isc3dDQUFrQzs7YUFFbkM7Ozs7WUFQUSxtQkFBbUI7Ozt1QkFTekIsS0FBSztxQkFDTCxNQUFNOzs7O0lBRFAsbUNBQW1DOztJQUNuQyxpQ0FBd0Q7O0lBQ3hELCtCQUFlOztJQUVILHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElucHV0Q2hvb3NlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaW5wdXQtY2hvb3Nlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJbnB1dEludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW5wdXQuaW50ZXJmYWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1tYXRlcmlhbC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtRGF0YTpJbnB1dEludGVyZmFjZVtdO1xuICBAT3V0cHV0KCkgb3V0cHV0OkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb3JtOkZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXRHcm91cDpJbnB1dENob29zZXJTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmlucHV0R3JvdXAuYnVpbGRGb3JtR3JvdXAodGhpcy5mb3JtRGF0YSlcbiAgICBjb25zb2xlLmxvZygndGhpcy5mb3JtJywgdGhpcy5mb3JtKTtcblxuICB9XG5cbiAgZ2V0VHlwZSh0eXBlOnN0cmluZyk6c3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZSA/IHR5cGUgOiAnaW5wdXQnO1xuICB9XG5cbiAgb25TdWJtaXQoZTphbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB0aGlzLm91dHB1dC5lbWl0KGUpO1xuICB9XG59XG4iXX0=