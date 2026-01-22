import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderView } from './order-view';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

describe('OrderView', () => {
  let component: OrderView;
  let fixture: ComponentFixture<OrderView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderView],
      providers: [DynamicDialogConfig, DynamicDialogRef]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
