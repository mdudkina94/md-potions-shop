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
import { DeliveryMethod } from '@/orders/orders.types';
import { POTIONS_LIST } from '@/potions/potions.data';
import { MultiSelectModule } from 'primeng/multiselect';
import { PotionsService } from '@/potions/potions.service';

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

  form: FormGroup = new FormGroup({
    orderId: new FormControl(null),
    customerName: new FormControl(null, [Validators.required]),
    orderDate: new FormControl(null),
    readyByDate: new FormControl(null, [Validators.required]),
    deliveryAddress: new FormControl(null),
    deliveryMethod: new FormControl(DeliveryMethod.SelfPickup, [Validators.required]),
    status: new FormControl(null),
    paymentMethod: new FormControl(null, [Validators.required]),
    potions: new FormControl(null, [Validators.required]),
    totalOrderPrice: new FormControl(null)
  });

  readonly currentDate = new Date();

  readonly deliveryMethodOptions = DELIVERY_METHODS;
  readonly paymentMethodOptions = PAYMENT_METHODS;
  readonly potionsList = this.potionsService.potions;

  ngOnInit() {}

  onClose(): void {
    this.ref.close();
  }

  onSave(): void {
    const baseData = this.form.getRawValue();

    const resultData = {
      ...baseData,
      orderId: this.potionsList.
    }


    console.log();
  }

  protected readonly DeliveryMethod = DeliveryMethod;
}
