import EmberRouter from '@ember/routing/router';
import config from 'great-quotes-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('quotes');
  this.route('new-quote');
  this.route('quote', { path: '/quotes/:quoteId' }, function () {
    this.route('comments');
  });
  this.route('not-found', { path: '/*' });
});
