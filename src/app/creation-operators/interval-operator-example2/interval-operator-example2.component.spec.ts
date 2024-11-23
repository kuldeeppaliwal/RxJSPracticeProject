import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalOperatorExample2Component } from './interval-operator-example2.component';

describe('IntervalOperatorExample2Component', () => {
  let component: IntervalOperatorExample2Component;
  let fixture: ComponentFixture<IntervalOperatorExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalOperatorExample2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalOperatorExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
