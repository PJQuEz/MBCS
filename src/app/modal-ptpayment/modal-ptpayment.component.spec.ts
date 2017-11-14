import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPTpaymentComponent } from './modal-ptpayment.component';

describe('ModalPTpaymentComponent', () => {
  let component: ModalPTpaymentComponent;
  let fixture: ComponentFixture<ModalPTpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPTpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPTpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
