import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSidebar } from '@/layout/component/app.sidebar';
import { AppTopbar } from '@/layout/component/app.topbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AppSidebar, AppTopbar],
  template: `
    <div class="layout-wrapper">
      <app-topbar></app-topbar>
      <app-sidebar></app-sidebar>
      <div class="layout-main-container">
        <div class="layout-main">
          <router-outlet></router-outlet>
        </div>
      </div>
      <div class="layout-mask animate-fadein"></div>
    </div>
  `
})
export class AppComponent {}
