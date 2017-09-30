import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIngredientComponent } from './table-ingredient.component';

describe('TableIngredientComponent', () => {
  let component: TableIngredientComponent;
  let fixture: ComponentFixture<TableIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
