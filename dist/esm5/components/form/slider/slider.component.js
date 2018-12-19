/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
var DySliderComponent = /** @class */ (function () {
    function DySliderComponent() {
    }
    DySliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dy-slider',
                    template: "<div class=\"slider-container\" [formGroup]=\"formGroup\">\n  <mat-slider\n      class=\"slider\"\n      formControlName=\"{{params.attr}}\"\n      [disabled]=\"params.settings.disabled\"\n      [invert]=\"params.settings.invert\"\n      [max]=\"params.settings.max\"\n      [min]=\"params.settings.min\"\n      [step]=\"params.settings.step\"\n      [thumbLabel]=\"params.settings.thumbLabel\"\n      [tickInterval]=\"params.settings.tickInterval\"\n      [vertical]=\"params.settings.vertical\">\n  </mat-slider>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DySliderComponent.ctorParameters = function () { return []; };
    DySliderComponent.propDecorators = {
        params: [{ type: Input }],
        formGroup: [{ type: Input }]
    };
    return DySliderComponent;
}());
export { DySliderComponent };
if (false) {
    /** @type {?} */
    DySliderComponent.prototype.params;
    /** @type {?} */
    DySliderComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1keW5hbWljLWZvcm0vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Zvcm0vc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVNFO0lBQ0EsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix3aEJBQW9DOztpQkFFckM7Ozs7O3lCQUVFLEtBQUs7NEJBQ0wsS0FBSzs7SUFJUix3QkFBQztDQUFBLEFBWEQsSUFXQztTQU5ZLGlCQUFpQjs7O0lBQzVCLG1DQUErQjs7SUFDL0Isc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEludGVyZmFjZSB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvaW5wdXQuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHktc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHlTbGlkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBwYXJhbXM6SW5wdXRJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cDpGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiJdfQ==