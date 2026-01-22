import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { ORDERS_DATA } from '@/orders/orders.data';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getOrders should return array of orders', () => {
    expect(service.orders).toBe(ORDERS_DATA);
  });
});
