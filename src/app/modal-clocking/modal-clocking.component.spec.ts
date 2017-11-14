import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClockingComponent } from './modal-clocking.component';

describe('ModalClockingComponent', () => {
  let component: ModalClockingComponent;
  let fixture: ComponentFixture<ModalClockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalClockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
