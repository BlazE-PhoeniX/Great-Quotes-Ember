import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { addQuote } from '../util/api';

export default class NewQuoteController extends Controller {
  @service('http-requests') http;
  @service router;

  @tracked res = {};
  @tracked showLoader = false;

  get isLoading() {
    return this.showLoader;
  }

  @action
  async addQuote(quote) {
    this.showLoader = true;
    this.res = await this.http.request.perform(addQuote, quote);
    this.showLoader = false;
    if (this.res.state == 'completed') {
      this.res = {};
      this.router.transitionTo('quotes', { queryParams: { sort: 'asc' } });
    }
  }
}
