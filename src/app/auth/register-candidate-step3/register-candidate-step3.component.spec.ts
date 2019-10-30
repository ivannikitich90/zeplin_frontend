import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCandidateStep3Component } from './register-candidate-step3.component';

describe('RegisterCandidateStep3Component', () => {
  let component: RegisterCandidateStep3Component;
  let fixture: ComponentFixture<RegisterCandidateStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCandidateStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCandidateStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
