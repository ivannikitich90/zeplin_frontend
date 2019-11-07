import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSlotComponent } from './save-slot.component';

describe('SaveSlotComponent', () => {
  let component: SaveSlotComponent;
  let fixture: ComponentFixture<SaveSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
