// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAOlP4gyFk1U88qMHFtdIBW4vrypr_EnSI",
    authDomain: "ng4-cms.firebaseapp.com",
    databaseURL: "https://ng4-cms.firebaseio.com",
    projectId: "ng4-cms",
    storageBucket: "ng4-cms.appspot.com",
    messagingSenderId: "976503112485"
  }
};
