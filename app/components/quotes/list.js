import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

export default class QuotesListComponent extends Component {
  @service router;

  get sortAsc() {
    return this.args.sort !== 'desc';
  }

  @action
  addQuery() {
    this.router.transitionTo({
      queryParams: { sort: this.sortAsc ? 'desc' : 'asc' },
    });
  }

  get sortedQuotes() {
    return sortQuotes(this.args.quotes, this.sortAsc);
  }
}
