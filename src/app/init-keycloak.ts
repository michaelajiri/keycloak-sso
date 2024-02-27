import { KeycloakService } from 'keycloak-angular';

export function initKeycloak (keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://kauth.thewealthmarket.com',
        realm: 'wealthmarket',
        clientId: 'keycloak-sso',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
    })
    .then((authenticated) => {
      if (authenticated) {
        console.log("User is authenticated");
        console.log(keycloak.getToken());
        // Event listener for 'token' event
        console.log(keycloak.loadUserProfile());
      } else {
        console.log("User is not authenticated");
      }
    });
}
