import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMenuComponent } from './selected-menu.component';

describe('SelectedMenuComponent', () => {
  let component: SelectedMenuComponent;
  let fixture: ComponentFixture<SelectedMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
