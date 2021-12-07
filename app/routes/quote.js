import Route from '@ember/routing/route';

export default class QuoteRoute extends Route {
  model(params) {
    return params.quoteId;
  }
}
