import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sign4Component } from './sign4.component';

describe('Sign4Component', () => {
  let component: Sign4Component;
  let fixture: ComponentFixture<Sign4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sign4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sign4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
