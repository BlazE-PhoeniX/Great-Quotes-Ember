import Service from '@ember/service';
import { task } from 'ember-concurrency';

export default class HttpRequestsService extends Service {
  state = '';
  data = null;
  error = null;

  @task({ restartable: true })
  *request(requestFunction, requestData) {
    this.state = '';
    this.data = null;
    this.error = null;
    try {
      const responseData = yield requestFunction(requestData);
      this.data = responseData;
      this.state = 'completed';
    } catch (err) {
      this.error = err;
      this.state = 'error';
    }
  }
}
