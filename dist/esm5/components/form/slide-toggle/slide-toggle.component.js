/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
var DySlideToggleComponent = /** @class */ (function () {
    function DySlideToggleComponent() {
    }
    DySlideToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dy-slide-toggle',
                    template: "<div class=\"slide-toggle-container\" [formGroup]=\"formGroup\">\n    {{params.attr}}\n    {{params.settings.checked}}\n  <mat-slide-toggle\n      class=\"slide-toggle\"\n      formControlName=\"{{params.attr}}\"\n      checked=false\n      [disabled]=\"params.settings.disabled\">\n      {{params.alias}}\n  </mat-slide-toggle>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DySlideToggleComponent.ctorParameters = function () { return []; };
    DySlideToggleComponent.propDecorators = {
        params: [{ type: Input }],
        formGroup: [{ type: Input }]
    };
    return DySlideToggleComponent;
}());
export { DySlideToggleComponent };
if (false) {
    /** @type {?} */
    DySlideToggleComponent.prototype.params;
    /** @type {?} */
    DySlideToggleComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1keW5hbWljLWZvcm0vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Zvcm0vc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVNFO0lBQ0EsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDhWQUEwQzs7aUJBRTNDOzs7Ozt5QkFFRSxLQUFLOzRCQUNMLEtBQUs7O0lBSVIsNkJBQUM7Q0FBQSxBQVhELElBV0M7U0FOWSxzQkFBc0I7OztJQUNqQyx3Q0FBK0I7O0lBQy9CLDJDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2lucHV0LmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5LXNsaWRlLXRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER5U2xpZGVUb2dnbGVDb21wb25lbnQge1xuICBASW5wdXQoKSBwYXJhbXM6SW5wdXRJbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cDpGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiJdfQ==