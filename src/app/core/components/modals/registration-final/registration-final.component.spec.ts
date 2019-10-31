import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFinalComponent } from './registration-final.component';

describe('RegistrationFinalComponent', () => {
  let component: RegistrationFinalComponent;
  let fixture: ComponentFixture<RegistrationFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
