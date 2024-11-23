import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorExample2Component } from './from-operator-example2.component';

describe('FromOperatorExample2Component', () => {
  let component: FromOperatorExample2Component;
  let fixture: ComponentFixture<FromOperatorExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOperatorExample2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromOperatorExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
