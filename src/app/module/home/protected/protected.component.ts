import { Component } from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {

  constructor(private oidcSecurityService: OidcSecurityService) {

  }

  renew() {
    this.oidcSecurityService.forceRefreshSession().subscribe(item => console.log(item));
  }
}
