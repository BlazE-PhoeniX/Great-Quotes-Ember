import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { addQuote } from '../util/api';

export default class NewQuoteController extends Controller {
  @service('http-requests') http;

  init() {
    super.init(...arguments);
    console.log('works');
    this.addObserver(this.http.state, () => {
      console.log(this.http.state);
      if (this.http.state == 'completed') {
        this.transitionTo('quotes');
      }
    });
  }

  @action
  addQuote(quote) {
    this.http.request.perform(addQuote, quote);
  }
}
