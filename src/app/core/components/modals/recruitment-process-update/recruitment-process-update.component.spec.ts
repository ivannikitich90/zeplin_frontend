import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentProcessUpdateComponent } from './recruitment-process-update.component';

describe('RecruitmentProcessUpdateComponent', () => {
  let component: RecruitmentProcessUpdateComponent;
  let fixture: ComponentFixture<RecruitmentProcessUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentProcessUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentProcessUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
