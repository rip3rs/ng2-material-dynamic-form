/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
export class DySlideToggleComponent {
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
if (false) {
    /** @type {?} */
    DySlideToggleComponent.prototype.params;
    /** @type {?} */
    DySlideToggleComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1keW5hbWljLWZvcm0vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Zvcm0vc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8sc0JBQXNCO0lBSWpDO0lBQ0EsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDhWQUEwQzs7YUFFM0M7Ozs7O3FCQUVFLEtBQUs7d0JBQ0wsS0FBSzs7OztJQUROLHdDQUErQjs7SUFDL0IsMkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dEludGVyZmFjZSB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvaW5wdXQuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHktc2xpZGUtdG9nZ2xlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZS10b2dnbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHlTbGlkZVRvZ2dsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBhcmFtczpJbnB1dEludGVyZmFjZTtcbiAgQElucHV0KCkgZm9ybUdyb3VwOkZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuIl19