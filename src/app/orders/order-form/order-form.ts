import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { AutoFocus } from 'primeng/autofocus';

@Component({
  selector: 'app-order-form',
  imports: [ReactiveFormsModule, InputTextModule, DatePickerModule, AutoFocus],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss',
  standalone: true
})
export class OrderForm implements OnInit {
  private ref = inject(DynamicDialogRef);
  form: FormGroup = new FormGroup({
    orderId: new FormControl(null),
    customerName: new FormControl(null, [Validators.required]),
    orderDate: new FormControl(null),
    readyByDate: new FormControl(null, [Validators.required]),
    deliveryAddress: new FormControl(null),
    deliveryMethod: new FormControl(null, [Validators.required]),
    status: new FormControl(null),
    paymentMethod: new FormControl(null, [Validators.required]),
    potions: new FormControl(null, [Validators.required]),
    totalOrderPrice: new FormControl(null)
  });

  readonly currentDate = new Date();

  ngOnInit() {}

  onClose(): void {
    this.ref.close();
  }
}
