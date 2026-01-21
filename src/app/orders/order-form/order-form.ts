import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { AutoFocus } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DELIVERY_METHODS, PAYMENT_METHODS } from '@/orders/orders.data';
import { TextareaModule } from 'primeng/textarea';
import { DeliveryMethod, OrderStatus, PaymentMethod } from '@/orders/orders.types';
import { MultiSelectModule } from 'primeng/multiselect';
import { PotionsService } from '@/potions/potions.service';
import { OrdersService } from '@/orders/orders.service';
import { calculateTotalOrderPrice } from '@/orders/orders.utils';
import { Potion } from '@/potions/potions.types';

@Component({
  selector: 'app-order-form',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    DatePickerModule,
    AutoFocus,
    ButtonModule,
    SelectButtonModule,
    TextareaModule,
    MultiSelectModule
  ],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss',
  standalone: true
})
export class OrderForm implements OnInit {
  private ref = inject(DynamicDialogRef);
  private potionsService = inject(PotionsService);
  private ordersService = inject(OrdersService);

  form: FormGroup = new FormGroup({
    orderId: new FormControl(null),
    customerName: new FormControl(null, [Validators.required]),
    orderDate: new FormControl(null),
    readyByDate: new FormControl(null, [Validators.required]),
    deliveryAddress: new FormControl(null),
    deliveryMethod: new FormControl(DeliveryMethod.SelfPickup, [Validators.required]),
    status: new FormControl(null),
    paymentMethod: new FormControl(PaymentMethod.Cash, [Validators.required]),
    potions: new FormControl(null, [Validators.required]),
    totalOrderPrice: new FormControl(0)
  });

  readonly currentDate = new Date();
  readonly deliveryMethodOptions = DELIVERY_METHODS;
  readonly paymentMethodOptions = PAYMENT_METHODS;
  readonly potionsList = this.potionsService.potions;
  readonly DeliveryMethod = DeliveryMethod;

  ngOnInit() {}

  onSelectPotions(data: Potion[]) {
    this.form.patchValue({
      totalOrderPrice: calculateTotalOrderPrice(data)
    });
  }

  onSave(): void {
    const baseData = this.form.getRawValue();

    const resultData = {
      ...baseData,
      orderId: this.ordersService.getOrderId(),
      orderDate: this.currentDate,
      status: OrderStatus.New
    };

    this.ordersService.newOrder(resultData);
    this.onClose();
  }

  onClose(): void {
    this.ref.close();
  }
}
