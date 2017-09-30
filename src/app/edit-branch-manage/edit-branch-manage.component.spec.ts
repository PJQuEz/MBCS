import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBranchManageComponent } from './edit-branch-manage.component';

describe('EditBranchManageComponent', () => {
  let component: EditBranchManageComponent;
  let fixture: ComponentFixture<EditBranchManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBranchManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBranchManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
