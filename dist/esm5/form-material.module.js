/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialImportModule } from "ng2-material-import";
import { InputChooserService } from "./services/input-chooser.service";
import { DyFormComponent } from './components/form/form.component';
import { DyInputComponent } from './components/form/input/input.component';
import { DyCheckboxComponent } from './components/form/checkbox/checkbox.component';
import { DySliderComponent } from './components/form/slider/slider.component';
import { DySlideToggleComponent } from './components/form/slide-toggle/slide-toggle.component';
import { DySelectComponent } from './components/form/select/select.component';
import { DyRadioComponent } from './components/form/radio/radio.component';
import { DyDatePickerComponent } from './components/form/date-picker/date-picker.component';
var FormMaterialModule = /** @class */ (function () {
    function FormMaterialModule() {
    }
    FormMaterialModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DyFormComponent,
                        DyInputComponent,
                        DyCheckboxComponent,
                        DySliderComponent,
                        DySlideToggleComponent,
                        DySelectComponent,
                        DyRadioComponent,
                        DyDatePickerComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialImportModule
                    ],
                    exports: [
                        DyFormComponent,
                        DyInputComponent,
                        DyCheckboxComponent,
                        DySliderComponent,
                        DySlideToggleComponent,
                        DySelectComponent,
                        DyRadioComponent
                    ],
                    providers: [
                        InputChooserService
                    ],
                },] }
    ];
    return FormMaterialModule;
}());
export { FormMaterialModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tYXRlcmlhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItbWF0ZXJpYWwtZHluYW1pYy1mb3JtLyIsInNvdXJjZXMiOlsiZm9ybS1tYXRlcmlhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBRTVGO0lBQUE7SUE4QmtDLENBQUM7O2dCQTlCbEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0QixpQkFBaUI7d0JBQ2pCLGdCQUFnQjtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULG1CQUFtQjtxQkFDcEI7aUJBQ0Y7O0lBQ2lDLHlCQUFDO0NBQUEsQUE5Qm5DLElBOEJtQztTQUF0QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IE1hdGVyaWFsSW1wb3J0TW9kdWxlIH0gZnJvbSBcIm5nMi1tYXRlcmlhbC1pbXBvcnRcIjtcbmltcG9ydCB7IElucHV0Q2hvb3NlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9pbnB1dC1jaG9vc2VyLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgRHlGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHlJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IER5U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHlTbGlkZVRvZ2dsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGUuY29tcG9uZW50JztcbmltcG9ydCB7IER5U2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHlSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3JhZGlvL3JhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeURhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEeUZvcm1Db21wb25lbnQsXG4gICAgRHlJbnB1dENvbXBvbmVudCxcbiAgICBEeUNoZWNrYm94Q29tcG9uZW50LFxuICAgIER5U2xpZGVyQ29tcG9uZW50LFxuICAgIER5U2xpZGVUb2dnbGVDb21wb25lbnQsXG4gICAgRHlTZWxlY3RDb21wb25lbnQsXG4gICAgRHlSYWRpb0NvbXBvbmVudCxcbiAgICBEeURhdGVQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdGVyaWFsSW1wb3J0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEeUZvcm1Db21wb25lbnQsXG4gICAgRHlJbnB1dENvbXBvbmVudCxcbiAgICBEeUNoZWNrYm94Q29tcG9uZW50LFxuICAgIER5U2xpZGVyQ29tcG9uZW50LFxuICAgIER5U2xpZGVUb2dnbGVDb21wb25lbnQsXG4gICAgRHlTZWxlY3RDb21wb25lbnQsXG4gICAgRHlSYWRpb0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBJbnB1dENob29zZXJTZXJ2aWNlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1NYXRlcmlhbE1vZHVsZSB7IH1cbiJdfQ==