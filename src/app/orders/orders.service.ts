import { Injectable } from '@angular/core';
import { ORDERS_DATA } from '@/orders/orders.data';
import { Order } from '@/orders/orders.types';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  _orders: Order[] = ORDERS_DATA;

  get orders() {
    return this._orders;
  }

  get orders$(): Observable<Order[]> {
    return from([this._orders]);
  }

  newOrder(order: Order) {
    this._orders.push(order);

    console.log(this._orders);
  }

  getOrderId(): number {
    const length = this._orders.length;
    return this._orders[length - 1].orderId + 1;
  }
}
