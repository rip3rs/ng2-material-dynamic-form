/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
export class DyRadioComponent {
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
if (false) {
    /** @type {?} */
    DyRadioComponent.prototype.params;
    /** @type {?} */
    DyRadioComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLW1hdGVyaWFsLWR5bmFtaWMtZm9ybS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS9yYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO0lBQ0EsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiwyV0FBbUM7O2FBRXBDOzs7OztxQkFFRSxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFETixrQ0FBK0I7O0lBQy9CLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2lucHV0LmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5LXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyYWRpby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER5UmFkaW9Db21wb25lbnQge1xuICBASW5wdXQoKSBwYXJhbXM6SW5wdXRJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cDpGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiJdfQ==