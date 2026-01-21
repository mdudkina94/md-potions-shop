import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionMixer } from './potion-mixer';

describe('PotionMixer', () => {
  let component: PotionMixer;
  let fixture: ComponentFixture<PotionMixer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionMixer]
    }).compileComponents();

    fixture = TestBed.createComponent(PotionMixer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
