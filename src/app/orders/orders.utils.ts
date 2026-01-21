import { Potion } from '@/potions/potions.types';

export const calculateTotalOrderPrice = (potions: Potion[]): number => {
  return potions.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
};
