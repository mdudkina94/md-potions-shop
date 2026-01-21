import { Component, inject, Input, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Order } from '@/orders/orders.types';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogComponent, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-order-view',
  imports: [DialogModule, ButtonModule],
  templateUrl: './order-view.html',
  styleUrl: './order-view.scss',
  standalone: true
})
export class OrderView implements OnInit {
  public config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  order: Order | undefined;

  ngOnInit() {
    this.order = this.config.data;
    console.log(this.order);
  }

  onClose(): void {
    this.ref.close();
  }
}
