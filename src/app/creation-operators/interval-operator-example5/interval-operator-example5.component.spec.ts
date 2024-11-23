import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalOperatorExample5Component } from './interval-operator-example5.component';

describe('IntervalOperatorExample5Component', () => {
  let component: IntervalOperatorExample5Component;
  let fixture: ComponentFixture<IntervalOperatorExample5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalOperatorExample5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalOperatorExample5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
