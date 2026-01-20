import { Ingredient } from '@/ingredients/ingredients.types';
import { Potion } from '@/potions/potions.types';

export enum DeliveryMethod {
    Mail = 'Почта',
    Courier = 'Курьер',
    SelfPickup = 'Самовывоз'
}

export enum PaymentMethod {
    Cash = 'Наличные',
    Card = 'Карта',
    MagicCoin = 'Волшебные монеты'
}

export interface Order {
  orderId: number;
  customerName: string;
  orderDate: Date;
  readyByDate: Date;
  deliveryAddress: string;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
  potions: Potion[];
  totalOrderPrice: number;
}
