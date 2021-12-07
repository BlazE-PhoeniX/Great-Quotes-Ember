import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { getAllQuotes } from '../util/api';

export default class QuotesRoute extends Route {
  @service('http-requests') http;

  beforeModel() {
    super.beforeModel(...arguments);
    (async () => {
      this.controllerFor('quotes').set('showLoader', true);
      let res = await this.http.request.perform(getAllQuotes);
      this.controllerFor('quotes').set('res', res);
      this.controllerFor('quotes').set('showLoader', false);
    })();
  }
}
