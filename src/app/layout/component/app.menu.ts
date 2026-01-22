import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `
    <ul class="layout-menu">
      @for (item of model; track item['key']) {
        <ng-container>
          @if (!item.separator) {
            <li app-menuitem [item]="item" [index]="$index" [root]="true"></li>
          } @else {
            <li class="menu-separator"></li>
          }
        </ng-container>
      }
    </ul>
  `
})
export class AppMenu {
  model: MenuItem[] = [
    {
      key: 1,
      items: [{ label: 'Заказы', icon: 'pi pi-fw pi-shopping-bag', routerLink: [''] }]
    },
    {
      key: 2,
      items: [{ label: 'Зелья', icon: 'pi pi-fw pi-tags', routerLink: ['/potions'] }]
    },
    {
      key: 3,
      items: [{ label: 'Ингредиенты', icon: 'pi pi-fw pi-sparkles', routerLink: ['/ingredients'] }]
    }
  ];
}
