import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOperatorExample1Component } from './of-operator-example1.component';

describe('OfOperatorExample1Component', () => {
  let component: OfOperatorExample1Component;
  let fixture: ComponentFixture<OfOperatorExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfOperatorExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfOperatorExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
