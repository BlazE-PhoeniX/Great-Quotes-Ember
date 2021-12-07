import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | quote/comments', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:quote/comments');
    assert.ok(route);
  });
});
