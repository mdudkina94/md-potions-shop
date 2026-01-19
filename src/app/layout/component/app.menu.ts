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
            @for (item of model; track item.id) {
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
            items: [{ label: 'Календарь', icon: 'pi pi-fw pi-calendar', routerLink: ['/'] }]
        },
        {
            items: [{ label: 'Заказы', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/orders'] }]
        },
        {
            items: [{ label: 'Зелья', icon: 'pi pi-fw pi-tags', routerLink: ['/potions'] }]
        },
        {
            items: [{ label: 'Ингредиенты', icon: 'pi pi-fw pi-sparkles', routerLink: ['/ingredients'] }]
        }
    ];
}
