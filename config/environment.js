'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'great-quotes-ember',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        Date: false,
      },
    },

    APP: {},
  };

  if (environment === 'development') {
    ENV.FIREBASE_DOMAIN = process.env.FIREBASE_DOMAIN;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.FIREBASE_DOMAIN = process.env.FIREBASE_DOMAIN;
    // here you can enable a production-specific feature
  }

  return ENV;
};
