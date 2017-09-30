import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBranchManagerComponent } from './table-branch-manager.component';

describe('TableBranchManagerComponent', () => {
  let component: TableBranchManagerComponent;
  let fixture: ComponentFixture<TableBranchManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBranchManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBranchManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
