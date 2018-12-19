/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
export class DySelectComponent {
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
if (false) {
    /** @type {?} */
    DySelectComponent.prototype.params;
    /** @type {?} */
    DySelectComponent.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1tYXRlcmlhbC1keW5hbWljLWZvcm0vIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Zvcm0vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU8zQyxNQUFNLE9BQU8saUJBQWlCO0lBSTVCO0lBQ0EsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixrVEFBb0M7O2FBRXJDOzs7OztxQkFFRSxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFETixtQ0FBK0I7O0lBQy9CLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2lucHV0LmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5LXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIER5U2VsZWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcGFyYW1zOklucHV0SW50ZXJmYWNlO1xuICBASW5wdXQoKSBmb3JtR3JvdXA6Rm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG4iXX0=