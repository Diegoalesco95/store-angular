// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyD2CXICYXE1ed30x8b_qDSHX-O4cSvHSEk',
    authDomain: 'store-angular-6a3e9.firebaseapp.com',
    databaseURL: 'https://store-angular-6a3e9.firebaseio.com',
    projectId: 'store-angular-6a3e9',
    storageBucket: 'store-angular-6a3e9.appspot.com',
    messagingSenderId: '373692029112',
    appId: '1:373692029112:web:1c4f5ee287ec56dcb73c4d',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
