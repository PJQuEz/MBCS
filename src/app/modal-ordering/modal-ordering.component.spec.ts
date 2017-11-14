import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrderingComponent } from './modal-ordering.component';

describe('ModalOrderingComponent', () => {
  let component: ModalOrderingComponent;
  let fixture: ComponentFixture<ModalOrderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOrderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
