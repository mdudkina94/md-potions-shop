import { Routes } from '@angular/router';
import { Home } from '@/home/home';
import { OrdersList } from '@/orders/orders-list/orders-list';
import { IngredientsList } from '@/ingredients/ingredients-list/ingredients-list';
import { PotionsList } from '@/potions/potions-list/potions-list';

export const appRoutes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: 'orders', component: OrdersList },
      { path: 'ingredients', component: IngredientsList },
      { path: 'potions', component: PotionsList }
    ]
  },
  { path: '**', redirectTo: '/orders' }
];
