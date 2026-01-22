import { Component } from '@angular/core';
import { Ingredient } from '@/ingredients/ingredients.types';
import { INGREDIENTS_LIST } from '@/ingredients/ingredients.data';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-potion-ingredient-option',
  imports: [ReactiveFormsModule, SelectModule, InputNumberModule, InputText],
  templateUrl: './potion-ingredient-option.html',
  styleUrl: './potion-ingredient-option.scss'
})
export class PotionIngredientOption {
  ingredients: Ingredient[] = INGREDIENTS_LIST;
  form = new FormGroup({
    ingredient: new FormControl(null, [Validators.required]),
    quantity: new FormControl({ value: 0, disabled: true }, [
      Validators.required,
      Validators.min(0)
    ]),
    totalPrice: new FormControl(0, [Validators.required])
  });

  onChange: any = () => {};
  onTouched: any = () => {};

  onSelectIngredient() {
    this.form.get('quantity')?.enable();
  }

  onChangeQuantity() {
    const ingredient = this.form.value.ingredient;
    if (ingredient) {
      this.calculatePrice(ingredient);
    }
  }

  calculatePrice(ingredient: Ingredient) {
    const quantity = this.form.value.quantity;
    if (ingredient && quantity) {
      this.form.patchValue({
        totalPrice: Math.round(ingredient.unitPrice * quantity)
      });
    }
  }

  writeValue(value: any): void {
    // this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
