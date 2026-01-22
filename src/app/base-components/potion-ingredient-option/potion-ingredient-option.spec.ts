import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionIngredientOption } from './potion-ingredient-option';

describe('PotionIngredientOption', () => {
  let component: PotionIngredientOption;
  let fixture: ComponentFixture<PotionIngredientOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionIngredientOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionIngredientOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
