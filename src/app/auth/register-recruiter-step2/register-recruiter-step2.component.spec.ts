import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRecruiterStep2Component } from './register-recruiter-step2.component';

describe('RegisterRecruiterStep2Component', () => {
  let component: RegisterRecruiterStep2Component;
  let fixture: ComponentFixture<RegisterRecruiterStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRecruiterStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRecruiterStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
