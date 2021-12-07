import Service from '@ember/service';
import { task } from 'ember-concurrency';

export default class HttpRequestsService extends Service {
  @task
  *request(requestFunction, requestData) {
    try {
      const responseData = yield requestFunction(requestData);
      return {
        data: responseData,
        state: 'completed',
        error: null,
      };
    } catch (err) {
      return {
        data: null,
        state: 'failed',
        error: err,
      };
    }
  }
}
