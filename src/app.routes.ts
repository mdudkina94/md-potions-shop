import { Routes } from '@angular/router';
import { NotFound} from '@/core/pages/not-found/not-found';
import { Orders } from '@/core/pages/orders/orders';
import { Home } from '@/core/pages/home/home';

export const appRoutes: Routes = [
    {path: '', component: Home },
    { path: 'orders', component: Orders },
    { path: 'not-found', component: NotFound },
    { path: '**', redirectTo: '/not-found' }
];
