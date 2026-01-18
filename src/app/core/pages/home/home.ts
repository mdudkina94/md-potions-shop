import { Component } from '@angular/core';
import { AppFooter } from '@/layout/component/app.footer';
import { AppSidebar } from '@/layout/component/app.sidebar';
import { AppTopbar } from '@/layout/component/app.topbar';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrl: './home.scss',
    imports: [AppFooter, AppSidebar, AppTopbar, RouterOutlet],
    standalone: true
})
export class Home {}
