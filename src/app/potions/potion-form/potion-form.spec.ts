import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionForm } from './potion-form';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

describe('PotionForm', () => {
  let component: PotionForm;
  let fixture: ComponentFixture<PotionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionForm],
      providers: [DynamicDialogRef]
    }).compileComponents();

    fixture = TestBed.createComponent(PotionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
