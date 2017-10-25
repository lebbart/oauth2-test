import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://localhost:9100',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/tracking',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'external-client',
};
