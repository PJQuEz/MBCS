import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockOutComponent } from './clock-out.component';

describe('ClockOutComponent', () => {
  let component: ClockOutComponent;
  let fixture: ComponentFixture<ClockOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
