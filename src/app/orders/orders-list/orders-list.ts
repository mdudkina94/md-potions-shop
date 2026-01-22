import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Order, OrderStatus, Severity } from '@/orders/orders.types';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AsyncPipe, DatePipe } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { OrderView } from '@/orders/order-view/order-view';
import { OrderForm } from '@/orders/order-form/order-form';
import { OrdersService } from '@/orders/orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  imports: [
    TableModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    DatePipe,
    ButtonModule,
    AsyncPipe
  ],
  providers: [DialogService],
  templateUrl: './orders-list.html',
  styleUrl: './orders-list.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersList {
  private dialogService = inject(DialogService);
  private ordersService = inject(OrdersService);
  private cdr = inject(ChangeDetectorRef);

  orders: Observable<Order[]> = this.ordersService.orders$;

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
    this.dialogService.open(OrderView, {
      header: `Заказ #${order.orderId}`,
      data: order,
      modal: true,
      width: '30vw',
      closable: true,
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      }
    });
  }

  newOrder() {
    const dialogRef = this.dialogService.open(OrderForm, {
      header: `Новый заказ`,
      modal: true,
      width: '30vw',
      closable: true,
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      }
    });

    dialogRef.onClose.subscribe((res) => {
      this.cdr.detectChanges();
    });
  }
}
