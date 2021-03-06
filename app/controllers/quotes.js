import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class QuotesController extends Controller {
  queryParams = ['sort'];
  sort = '';

  @tracked res = {};

  @tracked showLoader = false;

  get showQuotes() {
    return this.res.state === 'completed' && this.quotes.length > 0;
  }

  get quotes() {
    return this.res.data;
  }

  get error() {
    return this.res.error;
  }
}
