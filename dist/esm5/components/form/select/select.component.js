/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
var DySelectComponent = /** @class */ (function () {
    function DySelectComponent() {
    }
    DySelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dy-select',
                    template: "<div class=\"select-container\" [formGroup]=\"formGroup\">\n  <mat-select placeholder=\"{{params.alias}}\" formControlName=\"{{params.attr}}\">\n    <mat-option *ngFor=\"let option of params.options\" [value]=\"option.value\">\n      {{option.key}}\n    </mat-option>\n  </mat-select>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DySelectComponent.ctorParameters = function () { return []; };
    DySelectComponent.propDecorators = {
        params: [{ type: Input }],
        formGroup: [{ type: Input }]
    };
    return DySelectComponent;
}());
export { DySelectComponent };
if (false) {
    /** @type {?} */
    DySelectComponent.prototype.params;
    /** @type {?} */
    DySelectComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1keW5hbWljLWZvcm0vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Zvcm0vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVNFO0lBQ0EsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixrVEFBb0M7O2lCQUVyQzs7Ozs7eUJBRUUsS0FBSzs0QkFDTCxLQUFLOztJQUlSLHdCQUFDO0NBQUEsQUFYRCxJQVdDO1NBTlksaUJBQWlCOzs7SUFDNUIsbUNBQStCOztJQUMvQixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9pbnB1dC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeVNlbGVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhcmFtczpJbnB1dEludGVyZmFjZTtcbiAgQElucHV0KCkgZm9ybUdyb3VwOkZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuIl19