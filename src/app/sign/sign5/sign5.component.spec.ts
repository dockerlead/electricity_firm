import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sign5Component } from './sign5.component';

describe('Sign5Component', () => {
  let component: Sign5Component;
  let fixture: ComponentFixture<Sign5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sign5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sign5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
