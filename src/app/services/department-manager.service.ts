import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Department } from '../models/department';

@Injectable()
export class DepartmentManagerService {

  public allDepartmentsList: Department[];

  constructor(private http: Http) {
    
  }

  getallDepartments(): Observable<Department[]> {
    return this.http.get('http://beta.json-generator.com/api/json/get/EyPLNlCvG')
      .map(res => res.json())
      .map(rawDepartments => rawDepartments.map(Department.create))
      .map(response => this.allDepartmentsList = response);
  }

}
