import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { getAllComments } from '../../util/api';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CommentsIndexComponent extends Component {
  @service('http-requests') http;

  @tracked res = {};
  @tracked showLoader = false;
  @tracked isAddingComment = false;

  @action
  async fetchComments() {
    this.showLoader = true;
    this.res = await this.http.request.perform(
      getAllComments,
      this.args.quoteId
    );
    this.showLoader = false;
  }

  @action
  startAddCommentHandler() {
    this.isAddingComment = true;
  }

  async completeCommentHandler() {
    this.isAddingComment = false;
    this.fetchComments();
  }

  hideForm = this.completeCommentHandler.bind(this);

  get showCommentsList() {
    return this.res.state === 'completed' && this.comments.length > 0;
  }

  get comments() {
    return this.res.data;
  }
}
