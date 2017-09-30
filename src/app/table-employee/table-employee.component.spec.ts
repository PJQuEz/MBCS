import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmployeeComponent } from './table-employee.component';

describe('TableEmployeeComponent', () => {
  let component: TableEmployeeComponent;
  let fixture: ComponentFixture<TableEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
