import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NgAuthService } from './service/ng-auth.service';

/**
 * Guard para permitir el manejo y administracion de los libros
 * si inicia sesion 
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   * @ignore
   */
  constructor(
    public ngAuthService: NgAuthService,
    public router: Router
  ){ }
  
  /**
   * Guardia para que pueda navegar si el usuario a iniciado sesion
   * @param next 
   * @param state 
   * @returns 
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.ngAuthService.isLoggedIn !== true) {
        this.router.navigate(['sign-in'])
      }
      return true;
  }

}
