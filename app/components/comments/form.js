import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { addComment } from '../../util/api';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CommentsFormComponent extends Component {
  @service('http-requests') http;

  @tracked res = {};
  @tracked comment = '';
  @tracked showLoader = false;

  @action
  updateComment(e) {
    this.comment = e.target.value;
  }

  @action
  async submitFormHandler(e) {
    e.preventDefault();
    this.showLoader = true;
    this.res = await this.http.request.perform(addComment, {
      quoteId: this.args.quoteId,
      commentData: this.comment,
    });
    this.showLoader = false;
    if (this.res.state === 'completed') {
      this.args.onHideForm();
    }
  }
}
