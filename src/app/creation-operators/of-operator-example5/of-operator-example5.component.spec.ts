import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOperatorExample5Component } from './of-operator-example5.component';

describe('OfOperatorExample5Component', () => {
  let component: OfOperatorExample5Component;
  let fixture: ComponentFixture<OfOperatorExample5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfOperatorExample5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfOperatorExample5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
