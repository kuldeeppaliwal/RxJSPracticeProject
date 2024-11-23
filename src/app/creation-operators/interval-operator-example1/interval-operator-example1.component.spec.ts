import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalOperatorExample1Component } from './interval-operator-example1.component';

describe('IntervalOperatorExample1Component', () => {
  let component: IntervalOperatorExample1Component;
  let fixture: ComponentFixture<IntervalOperatorExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalOperatorExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalOperatorExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
