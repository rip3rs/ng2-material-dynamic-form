/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
var DyDatePickerComponent = /** @class */ (function () {
    function DyDatePickerComponent() {
    }
    DyDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dy-date-picker',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"{{params.alias}}\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DyDatePickerComponent.ctorParameters = function () { return []; };
    DyDatePickerComponent.propDecorators = {
        params: [{ type: Input }],
        formGroup: [{ type: Input }]
    };
    return DyDatePickerComponent;
}());
export { DyDatePickerComponent };
if (false) {
    /** @type {?} */
    DyDatePickerComponent.prototype.params;
    /** @type {?} */
    DyDatePickerComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLW1hdGVyaWFsLWR5bmFtaWMtZm9ybS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVNFO0lBQ0EsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDRQQUF5Qzs7aUJBRTFDOzs7Ozt5QkFFRSxLQUFLOzRCQUNMLEtBQUs7O0lBSVIsNEJBQUM7Q0FBQSxBQVhELElBV0M7U0FOWSxxQkFBcUI7OztJQUNoQyx1Q0FBK0I7O0lBQy9CLDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2lucHV0LmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5LWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER5RGF0ZVBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhcmFtczpJbnB1dEludGVyZmFjZTtcbiAgQElucHV0KCkgZm9ybUdyb3VwOkZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuIl19