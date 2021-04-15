// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    api: 'https://pokeapi.co/api/v2/',
    pokemon: {
      id: 'pokemon/_id_',
      name: 'pokemon/_name_'
    },
    type: {
      id: 'type/_id_'
    },
    ability: {
      id: 'ability/_id_'
    }
  },

  endpointSW: {
    api: 'https://swapi.dev/api/',
    person: {
      id: 'people/_id_/',
    }
  },

  firebaseConfig: {
    apiKey: "AIzaSyAPAjj2sc1cNd5A744b29EXtmTRmHPCg2Q",
    authDomain: "ionicnodemcu.firebaseapp.com",
    databaseURL: "https://ionicnodemcu-default-rtdb.firebaseio.com",
    projectId: "ionicnodemcu",
    storageBucket: "ionicnodemcu.appspot.com",
    messagingSenderId: "686186698947",
    appId: "1:686186698947:web:da37843eac1fc3a70f2a76",
    measurementId: "G-SCGHDTZ0VB"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
