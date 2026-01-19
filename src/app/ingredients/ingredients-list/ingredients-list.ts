import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Ingredient } from '@/ingredients/ingredients.types';
import { INGREDIENTS_LIST } from '@/ingredients/ingredients.data';

@Component({
  selector: 'app-ingredients-list',
  imports: [TableModule],
  templateUrl: './ingredients-list.html',
  styleUrl: './ingredients-list.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientsList {
  readonly ingredients: Ingredient[] = INGREDIENTS_LIST;
}
