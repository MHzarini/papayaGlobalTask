import { NgModule } from '@angular/core';
import { RouterModule, Route, RouterOutlet } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { CanActivateGuard } from './services/can-deacrivate-fuard.service';
import { SelectivePreloadingStrategy } from './services/selective-preloading-strategy';


export const rootRouterConfig: Route[] = [
  { path: '', canActivate: [CanActivateGuard], redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(
      rootRouterConfig
    )
  ],
  providers: [CanActivateGuard ]
})
export class AppRouteModule { }
