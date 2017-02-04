import {Component} from '@angular/core';

import { Department } from '../models/department';

import { DepartmentManagerService } from '../services/department-manager.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public allDepartmentsList: Department[];

  constructor(departmentManagerService: DepartmentManagerService) {
    departmentManagerService.getallDepartments().subscribe(
      response => {
        this.allDepartmentsList = response;
        console.log(response);
      }
    );
  }
}
