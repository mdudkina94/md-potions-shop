import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-order-form',
  imports: [ReactiveFormsModule, FloatLabelModule, InputTextModule],
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

  ngOnInit() {
  }

  onClose(): void {
    this.ref.close();
  }
}
