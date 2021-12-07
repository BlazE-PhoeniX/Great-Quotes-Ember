import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class QuotesFormComponent extends Component {
  @tracked author = '';
  @tracked quote = '';

  @action
  updateAuthor(e) {
    this.author = e.target.value;
  }

  @action
  updateQuote(e) {
    this.quote = e.target.value;
  }

  @action
  submitFormHandler(e) {
    e.preventDefault();
    this.args.onAddQuote({ author: this.author, text: this.quote });
  }
}
