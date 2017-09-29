import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DySlideToggleComponent } from './slide-toggle.component';

describe('DySlideToggleComponent', () => {
  let component: DySlideToggleComponent;
  let fixture: ComponentFixture<DySlideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DySlideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DySlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
