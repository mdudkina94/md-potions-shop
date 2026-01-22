import { Routes } from '@angular/router';
import { OrdersList } from '@/orders/orders-list/orders-list';
import { IngredientsList } from '@/ingredients/ingredients-list/ingredients-list';
import { PotionsList } from '@/potions/potions-list/potions-list';

export const appRoutes: Routes = [
  { path: '', component: OrdersList },
  { path: 'ingredients', component: IngredientsList },
  { path: 'potions', component: PotionsList },
  { path: '**', redirectTo: '/' }
];
