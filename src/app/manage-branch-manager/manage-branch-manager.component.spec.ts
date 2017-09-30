import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBranchManagerComponent } from './manage-branch-manager.component';

describe('ManageBranchManagerComponent', () => {
  let component: ManageBranchManagerComponent;
  let fixture: ComponentFixture<ManageBranchManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBranchManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBranchManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
