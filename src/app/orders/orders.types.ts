import { Potion } from '@/potions/potions.types';

export type Severity = 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast';

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

export enum OrderStatus {
  New = 'Новый',
  InProgress = 'В работе',
  Ready = 'Готов к выдаче',
  InDelivery = 'В доставке',
  Completed = 'Завершен',
  Canceled = 'Отменен'
}

export interface Order {
  orderId: number;
  customerName: string;
  orderDate: Date;
  readyByDate: Date;
  deliveryAddress: string;
  deliveryMethod: DeliveryMethod;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  potions: Potion[];
  totalOrderPrice: number;
}
