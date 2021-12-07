import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NavigationComponent extends Component {
  @service router;

  get listActive() {
    return this.router.currentURL.startsWith('/quotes');
  }
}
