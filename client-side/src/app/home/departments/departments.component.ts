import { Component, OnInit, Input } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

import { Department } from '../../models/department';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {

  @Input() allDepartmentsList: Department[];
  src: string = "";
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 32,
    resizeMaxWidth: 32
  };

  private selectedId: number;
  private editing = {};

  updateValue(event, cell, cellValue, departmentIndex, employeeIndex?) {
    if (employeeIndex !== undefined) {
      this.editing[departmentIndex + '-' + employeeIndex + '-' + cell] = false;
      this.allDepartmentsList[departmentIndex].employees[employeeIndex][cell] = event.target.value;
    } else {
      this.editing[departmentIndex + '-' + cell] = false;
      this.allDepartmentsList[departmentIndex][cell] = event.target.value;
    }

  }

  addNewEmployee(index) {
    this.allDepartmentsList[index].employees.push(new Employee(Math.round(99999), "N/A", "N/A", "http://placehold.it/32x32"));
  }

  addNewDepartment() {
    this.allDepartmentsList.push(new Department(Math.round(99999), "N/A"));
  }

  deleteEmployee(departmentIndex, employeeIndex) {
    this.allDepartmentsList[departmentIndex].employees.splice(employeeIndex, 1);
  }

  deleteDepartment(departmentIndex) {
    this.allDepartmentsList.splice(departmentIndex, 1);
  }

  selected(imageResult: ImageResult, departmentIndex, employeeIndex) {
    this.editing[departmentIndex + '-' + employeeIndex + '-image'] = false;
    this.allDepartmentsList[departmentIndex].employees[employeeIndex]['image'] = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }

}
