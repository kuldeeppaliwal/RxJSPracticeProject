import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalOperatorExample7Component } from './interval-operator-example7.component';

describe('IntervalOperatorExample7Component', () => {
  let component: IntervalOperatorExample7Component;
  let fixture: ComponentFixture<IntervalOperatorExample7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalOperatorExample7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalOperatorExample7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
