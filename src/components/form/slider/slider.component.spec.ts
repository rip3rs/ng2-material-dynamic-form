import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DySliderComponent } from './slider.component';

describe('DySliderComponent', () => {
  let component: DySliderComponent;
  let fixture: ComponentFixture<DySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
