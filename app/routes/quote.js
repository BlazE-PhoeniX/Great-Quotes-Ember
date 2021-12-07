import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { getSingleQuote } from '../util/api';

export default class QuoteRoute extends Route {
  @service('http-requests') http;

  beforeModel() {
    super.beforeModel(...arguments);
    const params = this.paramsFor('quote');
    (async () => {
      this.controllerFor('quote').set('showLoader', true);
      let res = await this.http.request.perform(getSingleQuote, params.quoteId);
      this.controllerFor('quote').set('res', res);
      this.controllerFor('quote').set('showLoader', false);
    })();
  }

  model(params) {
    return params.quoteId;
  }
}
