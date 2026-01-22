import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderForm } from './order-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

describe('OrderForm', () => {
  let component: OrderForm;
  let fixture: ComponentFixture<OrderForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderForm],
      providers: [DynamicDialogRef]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
