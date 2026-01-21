import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionsList } from './potions-list';

describe('PotionsList', () => {
  let component: PotionsList;
  let fixture: ComponentFixture<PotionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotionsList]
    }).compileComponents();

    fixture = TestBed.createComponent(PotionsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
