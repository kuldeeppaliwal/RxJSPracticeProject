import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalOperatorExample6Component } from './interval-operator-example6.component';

describe('IntervalOperatorExample6Component', () => {
  let component: IntervalOperatorExample6Component;
  let fixture: ComponentFixture<IntervalOperatorExample6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalOperatorExample6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalOperatorExample6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
