'use strict';

define('hstumblrapi/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('hstumblrapi/tests/controllers/favorites.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/favorites.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/favorites.js should pass jshint.\ncontrollers/favorites.js: line 26, col 52, Expected \'===\' and instead saw \'==\'.\ncontrollers/favorites.js: line 33, col 61, Expected \'===\' and instead saw \'==\'.\ncontrollers/favorites.js: line 35, col 68, Expected \'===\' and instead saw \'==\'.\ncontrollers/favorites.js: line 38, col 68, Expected \'===\' and instead saw \'==\'.\ncontrollers/favorites.js: line 60, col 47, Expected \'===\' and instead saw \'==\'.\ncontrollers/favorites.js: line 71, col 17, \'favorites\' is defined but never used.\ncontrollers/favorites.js: line 10, col 13, \'$\' is not defined.\ncontrollers/favorites.js: line 19, col 45, \'tumblrFeed\' is not defined.\n\n8 errors');
  });
});
define('hstumblrapi/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('hstumblrapi/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('hstumblrapi/tests/helpers/eq.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/eq.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/eq.js should pass jshint.');
  });
});
define('hstumblrapi/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'hstumblrapi/tests/helpers/start-app', 'hstumblrapi/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _hstumblrapiTestsHelpersStartApp, _hstumblrapiTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _hstumblrapiTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _hstumblrapiTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('hstumblrapi/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('hstumblrapi/tests/helpers/resolver', ['exports', 'hstumblrapi/resolver', 'hstumblrapi/config/environment'], function (exports, _hstumblrapiResolver, _hstumblrapiConfigEnvironment) {

  var resolver = _hstumblrapiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hstumblrapiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hstumblrapiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('hstumblrapi/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('hstumblrapi/tests/helpers/start-app', ['exports', 'ember', 'hstumblrapi/app', 'hstumblrapi/config/environment'], function (exports, _ember, _hstumblrapiApp, _hstumblrapiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _hstumblrapiConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _hstumblrapiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('hstumblrapi/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('hstumblrapi/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('hstumblrapi/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('hstumblrapi/tests/routes/favorites.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/favorites.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/favorites.js should pass jshint.');
  });
});
define('hstumblrapi/tests/test-helper', ['exports', 'hstumblrapi/tests/helpers/resolver', 'ember-qunit'], function (exports, _hstumblrapiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_hstumblrapiTestsHelpersResolver['default']);
});
define('hstumblrapi/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('hstumblrapi/tests/unit/controllers/favorites-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:favorites', 'Unit | Controller | favorites', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('hstumblrapi/tests/unit/controllers/favorites-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/favorites-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/favorites-test.js should pass jshint.');
  });
});
define('hstumblrapi/tests/unit/helpers/eq-test', ['exports', 'hstumblrapi/helpers/eq', 'qunit'], function (exports, _hstumblrapiHelpersEq, _qunit) {

  (0, _qunit.module)('Unit | Helper | eq');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _hstumblrapiHelpersEq.eq)([42]);
    assert.ok(result);
  });
});
define('hstumblrapi/tests/unit/helpers/eq-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/eq-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/eq-test.js should pass jshint.');
  });
});
define('hstumblrapi/tests/unit/routes/favorites-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:favorites', 'Unit | Route | favorites', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hstumblrapi/tests/unit/routes/favorites-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/favorites-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/favorites-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('hstumblrapi/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
