/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
var DyRadioComponent = /** @class */ (function () {
    function DyRadioComponent() {
    }
    DyRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dy-radio',
                    template: "<div class=\"radio-group-container\" [formGroup]=\"formGroup\">\n  <mat-radio-group class=\"radio\"  formControlName=\"{{params.attr}}\">\n    <mat-radio-button\n      class=\"radio-button\"\n      *ngFor=\"let option of params.options\"\n      [value]=\"option.key\">\n        {{option.value}}\n    </mat-radio-button>\n  </mat-radio-group>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DyRadioComponent.ctorParameters = function () { return []; };
    DyRadioComponent.propDecorators = {
        params: [{ type: Input }],
        formGroup: [{ type: Input }]
    };
    return DyRadioComponent;
}());
export { DyRadioComponent };
if (false) {
    /** @type {?} */
    DyRadioComponent.prototype.params;
    /** @type {?} */
    DyRadioComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLW1hdGVyaWFsLWR5bmFtaWMtZm9ybS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS9yYWRpby9yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVNFO0lBQ0EsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiwyV0FBbUM7O2lCQUVwQzs7Ozs7eUJBRUUsS0FBSzs0QkFDTCxLQUFLOztJQUlSLHVCQUFDO0NBQUEsQUFYRCxJQVdDO1NBTlksZ0JBQWdCOzs7SUFDM0Isa0NBQStCOztJQUMvQixxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9pbnB1dC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeS1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmFkaW8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeVJhZGlvQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGFyYW1zOklucHV0SW50ZXJmYWNlO1xuICBASW5wdXQoKSBmb3JtR3JvdXA6Rm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG4iXX0=