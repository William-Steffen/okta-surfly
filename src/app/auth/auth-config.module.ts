import {NgModule} from '@angular/core';
import {AuthModule, LogLevel} from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config:[
     // DEV
     //  {
     //    authority: 'https://https://ciam.dev.ethias.be/oauth2/aus5mt2ngh5wAIsqy0x7',
     //    configId: 'okta',
     //    authWellknownEndpointUrl: 'https://ciam.dev.ethias.be/oauth2/aus5mt2ngh5wAIsqy0x7/.well-known/openid-configuration',
     //    redirectUrl: `${window.location.origin}/callback?idp=okta`,
     //    postLoginRoute: '/protected',
     //    postLogoutRedirectUri: window.location.origin,
     //    clientId: '0oa8w6dfaupYIJ6KI0x7',
     //    // clientId: '0oa4vsvtk32ZaiQcp0x7',
     //    scope: 'customer_zone_b2c openid offline_access profile email',
     //    responseType: 'code',
     //    autoUserInfo: false,
     //    disableIdTokenValidation: false,
     //    triggerRefreshWhenIdTokenExpired: false,
     //    startCheckSession: true,
     //    silentRenew: true,
     //    useRefreshToken: true,
     //  },
      // // ACC
      // {
      //   authority: 'https://https://ciam.acc.ethias.be/oauth2/aus5tyv1zcpnYGzIk0x7',
      //   configId: 'okta',
      //   authWellknownEndpointUrl: 'https://ciam.acc.ethias.be/oauth2/aus5tyv1zcpnYGzIk0x7/.well-known/openid-configuration',
      //   redirectUrl: `${window.location.origin}/callback?idp=okta`,
      //   postLoginRoute: '/protected',
      //   postLogoutRedirectUri: window.location.origin,
      //   clientId: '0oa5u9kdqss6WvLjf0x7',
      //   scope: 'customer_zone_b2c openid offline_access profile email',
      //   responseType: 'code',
      //   autoUserInfo: false,
      //   disableIdTokenValidation: false,
      //   triggerRefreshWhenIdTokenExpired: false,
      //   startCheckSession: true,
      //   silentRenew: true,
      //   useRefreshToken: true,
      // },

   //   TST
      {
        authority: 'https://ciam.tst.ethias.be/oauth2/aus5mmtshuuVefokT0x7',
        configId: 'okta',
        authWellknownEndpointUrl: 'https://ciam.tst.ethias.be/oauth2/aus5mmtshuuVefokT0x7/.well-known/openid-configuration',
        redirectUrl: `${window.location.origin}/callback?idp=okta`,
        postLoginRoute: '/protected',
        postLogoutRedirectUri: window.location.origin,
        clientId: '0oa4v4zir8K7avllM0x7',
        scope: 'customer_zone_b2c openid offline_access profile email',
        responseType: 'code',
        autoUserInfo: false,
        disableIdTokenValidation: false,
        triggerRefreshWhenIdTokenExpired: false,
        startCheckSession: true,
        silentRenew: true,
        useRefreshToken: true,
      },
      // {
      //   configId: 'itsme',
      //   authWellknownEndpointUrl: 'https://ciam.acc.ethias.be/oauth2/aus5tyv1zcpnYGzIk0x7/.well-known/openid-configuration',
      //   authority: 'https://https://ciam.acc.ethias.be/oauth2/aus5tyv1zcpnYGzIk0x7',
      //   customParamsAuthRequest: {
      //     idp: '0oa5o0ab6wwLmOTuU0x7',
      //     idp_scope: 'ui_locales:fr',
      //   },
      //   redirectUrl: `${window.location.origin}/callback?idp=itsme`,
      //   postLoginRoute: '/protected',
      //   postLogoutRedirectUri: window.location.origin,
      //   clientId: '0oa5u9kdqss6WvLjf0x7',
      //   scope: 'customer_zone_b2c openid offline_access profile email',
      //   responseType: 'code',
      //   autoUserInfo: false,
      //   disableIdTokenValidation: false,
      //   triggerRefreshWhenIdTokenExpired: false,
      //   startCheckSession: true,
      //   silentRenew: true,
      //   useRefreshToken: true,
      //   logLevel: LogLevel.Debug,
      // }
    ]
  })],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
