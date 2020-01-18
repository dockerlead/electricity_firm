import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sign3Component } from './sign3.component';

describe('Sign3Component', () => {
  let component: Sign3Component;
  let fixture: ComponentFixture<Sign3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sign3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sign3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
