import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromeventOperatorExample1Component } from './fromevent-operator-example1.component';

describe('FromeventOperatorExample1Component', () => {
  let component: FromeventOperatorExample1Component;
  let fixture: ComponentFixture<FromeventOperatorExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromeventOperatorExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromeventOperatorExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
