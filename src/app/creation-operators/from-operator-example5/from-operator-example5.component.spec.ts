import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOperatorExample5Component } from './from-operator-example5.component';

describe('FromOperatorExample5Component', () => {
  let component: FromOperatorExample5Component;
  let fixture: ComponentFixture<FromOperatorExample5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromOperatorExample5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromOperatorExample5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
