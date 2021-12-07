import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class QuoteController extends Controller {
  @service router;

  queryParams = ['sort'];
  sort = '';

  @tracked res = {};

  @tracked showLoader = false;

  get quote() {
    return this.res.data;
  }

  get error() {
    return this.res.error;
  }

  get showComments() {
    return this.router.currentURL.endsWith('comments');
  }
}
