import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Potion } from '@/potions/potions.types';
import { POTIONS_LIST } from '@/potions/potions.data';
import { ButtonModule } from 'primeng/button';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-potions-list',
  imports: [TableModule, ButtonModule],
  templateUrl: './potions-list.html',
  styleUrl: './potions-list.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PotionsList {
  potions: Potion[] = POTIONS_LIST;

  expandedRows: expandedRows = {};

  newPotion() {}
}
