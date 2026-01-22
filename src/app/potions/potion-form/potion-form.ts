import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PotionsService } from '@/potions/potions.service';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { AutoFocus } from 'primeng/autofocus';
import { PotionIngredientOption } from '@/base-components/potion-ingredient-option/potion-ingredient-option';

@Component({
  selector: 'app-potion-form',
  imports: [Button, InputText, ReactiveFormsModule, AutoFocus, PotionIngredientOption],
  templateUrl: './potion-form.html',
  styleUrl: './potion-form.scss'
})
export class PotionForm {
  private ref = inject(DynamicDialogRef);
  private potionsService = inject(PotionsService);

  form = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    ingredients: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required])
  });

  onSave(): void {
    const baseData = this.form.getRawValue();

    const resultData = {
      ...baseData,
      id: this.potionsService.getNewPotionId(),
      price: 0
    };

    console.log(resultData);
    // this.potionsService.newPotion(resultData);
    // this.onClose();
  }

  onClose(): void {
    this.ref.close();
  }
}
