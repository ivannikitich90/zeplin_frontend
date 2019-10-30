import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCandidateStep2Component } from './register-candidate-step2.component';

describe('RegisterCandidateStep2Component', () => {
  let component: RegisterCandidateStep2Component;
  let fixture: ComponentFixture<RegisterCandidateStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCandidateStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCandidateStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
