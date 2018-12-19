/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
export class InputChooserService {
    constructor() { }
    /**
     * @param {?} inputsSettings
     * @return {?}
     */
    buildFormGroup(inputsSettings) {
        /** @type {?} */
        let group = {};
        inputsSettings.forEach(inputSetting => {
            console.log(inputSetting.attr);
            group[inputSetting.attr] = inputSetting.required ?
                new FormControl(inputSetting.value || '', Validators.required) :
                new FormControl(inputSetting.value || '');
        });
        return new FormGroup(group);
    }
}
InputChooserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InputChooserService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hvb3Nlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLW1hdGVyaWFsLWR5bmFtaWMtZm9ybS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2lucHV0LWNob29zZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUcvRSxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLGdCQUFnQixDQUFDOzs7OztJQUVqQixjQUFjLENBQUMsY0FBZ0M7O1lBQ3pDLEtBQUssR0FBUSxFQUFFO1FBRW5CLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDOUIsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFoQkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uL21vZGVscy9pbnB1dC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5wdXRDaG9vc2VyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBidWlsZEZvcm1Hcm91cChpbnB1dHNTZXR0aW5nczogSW5wdXRJbnRlcmZhY2VbXSApIHtcbiAgICBsZXQgZ3JvdXA6IGFueSA9IHt9O1xuXG4gICAgaW5wdXRzU2V0dGluZ3MuZm9yRWFjaChpbnB1dFNldHRpbmcgPT4ge1xuICAgICAgY29uc29sZS5sb2coaW5wdXRTZXR0aW5nLmF0dHIpXG4gICAgICBncm91cFtpbnB1dFNldHRpbmcuYXR0cl0gPSBpbnB1dFNldHRpbmcucmVxdWlyZWQgP1xuICAgICAgICBuZXcgRm9ybUNvbnRyb2woaW5wdXRTZXR0aW5nLnZhbHVlIHx8ICcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSA6XG4gICAgICAgIG5ldyBGb3JtQ29udHJvbChpbnB1dFNldHRpbmcudmFsdWUgfHwgJycpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoZ3JvdXApO1xuICB9XG59XG4iXX0=