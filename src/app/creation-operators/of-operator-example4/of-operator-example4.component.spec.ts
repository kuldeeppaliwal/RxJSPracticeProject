import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOperatorExample4Component } from './of-operator-example4.component';

describe('OfOperatorExample4Component', () => {
  let component: OfOperatorExample4Component;
  let fixture: ComponentFixture<OfOperatorExample4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfOperatorExample4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfOperatorExample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
