import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalOperatorExample3Component } from './interval-operator-example3.component';

describe('IntervalOperatorExample3Component', () => {
  let component: IntervalOperatorExample3Component;
  let fixture: ComponentFixture<IntervalOperatorExample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalOperatorExample3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalOperatorExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
