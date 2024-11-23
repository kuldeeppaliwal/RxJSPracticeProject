import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalOperatorExample4Component } from './interval-operator-example4.component';

describe('IntervalOperatorExample4Component', () => {
  let component: IntervalOperatorExample4Component;
  let fixture: ComponentFixture<IntervalOperatorExample4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalOperatorExample4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalOperatorExample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
