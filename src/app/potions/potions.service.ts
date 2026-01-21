import { Injectable } from '@angular/core';
import { Potion } from '@/potions/potions.types';
import { POTIONS_LIST } from '@/potions/potions.data';

@Injectable({
  providedIn: 'root'
})
export class PotionsService {
  _potionsData: Potion[] = POTIONS_LIST;

  get potions() {
    return this._potionsData;
  }

  newPotion(potion: Potion) {
    this._potionsData.push(potion);
  }
}
