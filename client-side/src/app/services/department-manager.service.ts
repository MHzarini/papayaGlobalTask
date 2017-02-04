import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('/api/departments')
      .map(res => res.json())
      .map(rawDepartments => rawDepartments.map(Department.create))
      .map(response => this.allDepartmentsList = response);
  }

}
