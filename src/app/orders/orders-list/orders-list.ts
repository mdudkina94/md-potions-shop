import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ORDERS_DATA } from '@/orders/orders.data';
import { Order, OrderStatus, Severity } from '@/orders/orders.types';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePipe } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-orders-list',
  imports: [TableModule, IconFieldModule, InputIconModule, TagModule, DatePipe, ButtonModule],
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.scss',
  standalone: true
})
export class OrdersList {
  orders: Order[] = ORDERS_DATA;
  getStatusSeverity(status: OrderStatus): Severity {
    switch (status) {
      case OrderStatus.New:
      default:
        return 'info';
      case OrderStatus.InProgress:
        return 'warn';
      case OrderStatus.Canceled:
        return 'danger';
      case OrderStatus.Completed:
        return 'success';
      case OrderStatus.Ready:
      case OrderStatus.InDelivery:
        return 'secondary';
    }
  }

  viewDetails(order: Order) {
    console.log("view ", order.orderId);
  }

  newOrder() {
    console.log("newOrder");
  }
}
