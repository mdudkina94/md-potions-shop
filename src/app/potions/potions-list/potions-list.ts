import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Potion } from '@/potions/potions.types';
import { POTIONS_LIST } from '@/potions/potions.data';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { PotionForm } from '@/potions/potion-form/potion-form';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-potions-list',
  imports: [TableModule, ButtonModule],
  providers: [DialogService],
  templateUrl: './potions-list.html',
  styleUrl: './potions-list.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PotionsList {
  private dialogService = inject(DialogService);

  potions: Potion[] = POTIONS_LIST;

  expandedRows: expandedRows = {};

  newPotion() {
    const dialogRef = this.dialogService.open(PotionForm, {
      header: `Новое зелье`,
      modal: true,
      width: '40vw',
      closable: true,
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      }
    });

    dialogRef.onClose.subscribe((res) => {
      // this.cdr.detectChanges();
    });
  }
}
