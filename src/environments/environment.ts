// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * Configuracion del firebase
 */
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCS8ewAApr8eV5epWb9KxN-utXKJyqyfwk",
    authDomain: "back-practica-final.firebaseapp.com",
    projectId: "back-practica-final",
    storageBucket: "back-practica-final.appspot.com",
    messagingSenderId: "322923213472",
    appId: "1:322923213472:web:eefd29d510714d8c320fc5",
    measurementId: "G-H0HPQM5041"
  },
  API_POSTMAN_URL: 'https://us-central1-back-practica-final.cloudfunctions.net/app/api/libros'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
