import { Potion } from '@/potions/potions.types';

export const calculateTotalPotionPrice = (potion: Potion): number => {
  return potion.ingredients.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0);
};
