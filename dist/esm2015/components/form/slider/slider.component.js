/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
export class DySliderComponent {
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
if (false) {
    /** @type {?} */
    DySliderComponent.prototype.params;
    /** @type {?} */
    DySliderComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1keW5hbWljLWZvcm0vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Zvcm0vc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO0lBQ0EsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix3aEJBQW9DOzthQUVyQzs7Ozs7cUJBRUUsS0FBSzt3QkFDTCxLQUFLOzs7O0lBRE4sbUNBQStCOztJQUMvQixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9pbnB1dC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzbGlkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEeVNsaWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhcmFtczpJbnB1dEludGVyZmFjZTtcbiAgQElucHV0KCkgZm9ybUdyb3VwOkZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuIl19