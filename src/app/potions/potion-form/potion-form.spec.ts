import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionForm } from './potion-form';

describe('PotionForm', () => {
  let component: PotionForm;
  let fixture: ComponentFixture<PotionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
