import { Injectable } from '@angular/core';
import { Potion } from '@/potions/potions.types';
import { POTIONS_LIST } from '@/potions/potions.data';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotionsService {
  _potions: Potion[] = POTIONS_LIST;

  get potions() {
    return this._potions;
  }

  get potions$(): Observable<Potion[]> {
    return from([this._potions]);
  }

  newPotion(potion: Potion) {
    this._potions.push(potion);
  }

  getNewPotionId(): number {
    const length = this._potions.length;
    return this._potions[length - 1].id + 1;
  }
}
