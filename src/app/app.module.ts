import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccordionModule } from "ngx-accordion";
import { AppRouteModule } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './home/departments/departments.component';

import { DepartmentManagerService } from './services/department-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    AppRouteModule
  ],
  providers: [
    DepartmentManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
