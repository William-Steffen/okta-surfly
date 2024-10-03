import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {StateService} from "../service/state.service";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private stateService: StateService,
              private oidcSecurityService: OidcSecurityService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.oidcSecurityService.isAuthenticated().pipe( map(result => {
      if (!result){
        console.log("----------------------------------------------------------------------------")
        console.log("----------------------------------------------------------------------------")
        console.log("------------------------UNAUTHENTICATED-------------------------------------")
        console.log("----------------------------------------------------------------------------")
        console.log("----------------------------------------------------------------------------")
        this.oidcSecurityService.authorize('okta');
        return false;
      }
      return true;
    }));
  }

}
