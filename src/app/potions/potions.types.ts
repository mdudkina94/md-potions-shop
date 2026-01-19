import { Ingredient } from '@/ingredients/ingredients.types';

export const BASE_PRICE_PERCENT = 40;

export type PotionIngredient = {
  id: number;
  quantity: number;
  totalPrice: number;
}

export interface Potion {
  id: number;
  name: string;
  ingredients: PotionIngredient[];
  price: number;
}
