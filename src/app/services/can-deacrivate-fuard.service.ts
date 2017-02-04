import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(router: Router) {

  }

  canActivate() {
    return true;
  }
}

