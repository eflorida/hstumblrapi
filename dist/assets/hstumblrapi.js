"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('hstumblrapi/app', ['exports', 'ember', 'hstumblrapi/resolver', 'ember-load-initializers', 'hstumblrapi/config/environment'], function (exports, _ember, _hstumblrapiResolver, _emberLoadInitializers, _hstumblrapiConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _hstumblrapiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hstumblrapiConfigEnvironment['default'].podModulePrefix,
    Resolver: _hstumblrapiResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _hstumblrapiConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('hstumblrapi/components/async-button', ['exports', 'ember-async-button/components/async-button'], function (exports, _emberAsyncButtonComponentsAsyncButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAsyncButtonComponentsAsyncButton['default'];
    }
  });
});
define('hstumblrapi/components/fields-for', ['exports', 'ember-form-for/components/fields-for'], function (exports, _emberFormForComponentsFieldsFor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFieldsFor['default'];
    }
  });
});
define('hstumblrapi/components/form-controls/button', ['exports', 'ember-form-for/components/form-controls/button'], function (exports, _emberFormForComponentsFormControlsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormControlsButton['default'];
    }
  });
});
define('hstumblrapi/components/form-controls/reset', ['exports', 'ember-form-for/components/form-controls/reset'], function (exports, _emberFormForComponentsFormControlsReset) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormControlsReset['default'];
    }
  });
});
define('hstumblrapi/components/form-controls/submit', ['exports', 'ember-form-for/components/form-controls/submit'], function (exports, _emberFormForComponentsFormControlsSubmit) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormControlsSubmit['default'];
    }
  });
});
define('hstumblrapi/components/form-errors', ['exports', 'ember-form-for/components/form-errors'], function (exports, _emberFormForComponentsFormErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormErrors['default'];
    }
  });
});
define('hstumblrapi/components/form-field', ['exports', 'ember-form-for/components/form-field'], function (exports, _emberFormForComponentsFormField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/checkbox-field', ['exports', 'ember-form-for/components/form-fields/checkbox-field'], function (exports, _emberFormForComponentsFormFieldsCheckboxField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsCheckboxField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/checkbox-group', ['exports', 'ember-form-for/components/form-fields/checkbox-group'], function (exports, _emberFormForComponentsFormFieldsCheckboxGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsCheckboxGroup['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/checkbox-group/option', ['exports', 'ember-form-for/components/form-fields/checkbox-group/option'], function (exports, _emberFormForComponentsFormFieldsCheckboxGroupOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsCheckboxGroupOption['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/color-field', ['exports', 'ember-form-for/components/form-fields/color-field'], function (exports, _emberFormForComponentsFormFieldsColorField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsColorField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/custom-field', ['exports', 'ember-form-for/components/form-fields/custom-field'], function (exports, _emberFormForComponentsFormFieldsCustomField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsCustomField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/date-field', ['exports', 'ember-form-for/components/form-fields/date-field'], function (exports, _emberFormForComponentsFormFieldsDateField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsDateField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/datetime-field', ['exports', 'ember-form-for/components/form-fields/datetime-field'], function (exports, _emberFormForComponentsFormFieldsDatetimeField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsDatetimeField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/datetime-local-field', ['exports', 'ember-form-for/components/form-fields/datetime-local-field'], function (exports, _emberFormForComponentsFormFieldsDatetimeLocalField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsDatetimeLocalField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/email-field', ['exports', 'ember-form-for/components/form-fields/email-field'], function (exports, _emberFormForComponentsFormFieldsEmailField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsEmailField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/file-field', ['exports', 'ember-form-for/components/form-fields/file-field'], function (exports, _emberFormForComponentsFormFieldsFileField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsFileField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/hidden-field', ['exports', 'ember-form-for/components/form-fields/hidden-field'], function (exports, _emberFormForComponentsFormFieldsHiddenField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsHiddenField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/month-field', ['exports', 'ember-form-for/components/form-fields/month-field'], function (exports, _emberFormForComponentsFormFieldsMonthField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsMonthField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/number-field', ['exports', 'ember-form-for/components/form-fields/number-field'], function (exports, _emberFormForComponentsFormFieldsNumberField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsNumberField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/password-field', ['exports', 'ember-form-for/components/form-fields/password-field'], function (exports, _emberFormForComponentsFormFieldsPasswordField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsPasswordField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/radio-field', ['exports', 'ember-form-for/components/form-fields/radio-field'], function (exports, _emberFormForComponentsFormFieldsRadioField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsRadioField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/radio-group', ['exports', 'ember-form-for/components/form-fields/radio-group'], function (exports, _emberFormForComponentsFormFieldsRadioGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsRadioGroup['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/range-field', ['exports', 'ember-form-for/components/form-fields/range-field'], function (exports, _emberFormForComponentsFormFieldsRangeField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsRangeField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/search-field', ['exports', 'ember-form-for/components/form-fields/search-field'], function (exports, _emberFormForComponentsFormFieldsSearchField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsSearchField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/select-field', ['exports', 'ember-form-for/components/form-fields/select-field'], function (exports, _emberFormForComponentsFormFieldsSelectField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsSelectField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/tel-field', ['exports', 'ember-form-for/components/form-fields/tel-field'], function (exports, _emberFormForComponentsFormFieldsTelField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsTelField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/text-field', ['exports', 'ember-form-for/components/form-fields/text-field'], function (exports, _emberFormForComponentsFormFieldsTextField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsTextField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/textarea-field', ['exports', 'ember-form-for/components/form-fields/textarea-field'], function (exports, _emberFormForComponentsFormFieldsTextareaField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsTextareaField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/time-field', ['exports', 'ember-form-for/components/form-fields/time-field'], function (exports, _emberFormForComponentsFormFieldsTimeField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsTimeField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/url-field', ['exports', 'ember-form-for/components/form-fields/url-field'], function (exports, _emberFormForComponentsFormFieldsUrlField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsUrlField['default'];
    }
  });
});
define('hstumblrapi/components/form-fields/week-field', ['exports', 'ember-form-for/components/form-fields/week-field'], function (exports, _emberFormForComponentsFormFieldsWeekField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFieldsWeekField['default'];
    }
  });
});
define('hstumblrapi/components/form-for', ['exports', 'ember-form-for/components/form-for'], function (exports, _emberFormForComponentsFormFor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormFor['default'];
    }
  });
});
define('hstumblrapi/components/form-hint', ['exports', 'ember-form-for/components/form-hint'], function (exports, _emberFormForComponentsFormHint) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormHint['default'];
    }
  });
});
define('hstumblrapi/components/form-label', ['exports', 'ember-form-for/components/form-label'], function (exports, _emberFormForComponentsFormLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForComponentsFormLabel['default'];
    }
  });
});
define('hstumblrapi/components/one-way-checkbox', ['exports', 'ember-one-way-controls/components/one-way-checkbox'], function (exports, _emberOneWayControlsComponentsOneWayCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayCheckbox['default'];
    }
  });
});
define('hstumblrapi/components/one-way-color', ['exports', 'ember-one-way-controls/components/one-way-color'], function (exports, _emberOneWayControlsComponentsOneWayColor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayColor['default'];
    }
  });
});
define('hstumblrapi/components/one-way-date', ['exports', 'ember-one-way-controls/components/one-way-date'], function (exports, _emberOneWayControlsComponentsOneWayDate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayDate['default'];
    }
  });
});
define('hstumblrapi/components/one-way-datetime-local', ['exports', 'ember-one-way-controls/components/one-way-datetime-local'], function (exports, _emberOneWayControlsComponentsOneWayDatetimeLocal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayDatetimeLocal['default'];
    }
  });
});
define('hstumblrapi/components/one-way-email', ['exports', 'ember-one-way-controls/components/one-way-email'], function (exports, _emberOneWayControlsComponentsOneWayEmail) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayEmail['default'];
    }
  });
});
define('hstumblrapi/components/one-way-file', ['exports', 'ember-one-way-controls/components/one-way-file'], function (exports, _emberOneWayControlsComponentsOneWayFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayFile['default'];
    }
  });
});
define('hstumblrapi/components/one-way-hidden', ['exports', 'ember-one-way-controls/components/one-way-hidden'], function (exports, _emberOneWayControlsComponentsOneWayHidden) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayHidden['default'];
    }
  });
});
define('hstumblrapi/components/one-way-input', ['exports', 'ember-one-way-controls/components/one-way-input'], function (exports, _emberOneWayControlsComponentsOneWayInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayInput['default'];
    }
  });
});
define('hstumblrapi/components/one-way-month', ['exports', 'ember-one-way-controls/components/one-way-month'], function (exports, _emberOneWayControlsComponentsOneWayMonth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayMonth['default'];
    }
  });
});
define('hstumblrapi/components/one-way-number', ['exports', 'ember-one-way-controls/components/one-way-number'], function (exports, _emberOneWayControlsComponentsOneWayNumber) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayNumber['default'];
    }
  });
});
define('hstumblrapi/components/one-way-password', ['exports', 'ember-one-way-controls/components/one-way-password'], function (exports, _emberOneWayControlsComponentsOneWayPassword) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayPassword['default'];
    }
  });
});
define('hstumblrapi/components/one-way-radio', ['exports', 'ember-one-way-controls/components/one-way-radio'], function (exports, _emberOneWayControlsComponentsOneWayRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayRadio['default'];
    }
  });
});
define('hstumblrapi/components/one-way-range', ['exports', 'ember-one-way-controls/components/one-way-range'], function (exports, _emberOneWayControlsComponentsOneWayRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayRange['default'];
    }
  });
});
define('hstumblrapi/components/one-way-search', ['exports', 'ember-one-way-controls/components/one-way-search'], function (exports, _emberOneWayControlsComponentsOneWaySearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySearch['default'];
    }
  });
});
define('hstumblrapi/components/one-way-select', ['exports', 'ember-one-way-controls/components/one-way-select'], function (exports, _emberOneWayControlsComponentsOneWaySelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySelect['default'];
    }
  });
});
define('hstumblrapi/components/one-way-select/option', ['exports', 'ember-one-way-controls/components/one-way-select/option'], function (exports, _emberOneWayControlsComponentsOneWaySelectOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySelectOption['default'];
    }
  });
});
define('hstumblrapi/components/one-way-tel', ['exports', 'ember-one-way-controls/components/one-way-tel'], function (exports, _emberOneWayControlsComponentsOneWayTel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTel['default'];
    }
  });
});
define('hstumblrapi/components/one-way-text', ['exports', 'ember-one-way-controls/components/one-way-text'], function (exports, _emberOneWayControlsComponentsOneWayText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayText['default'];
    }
  });
});
define('hstumblrapi/components/one-way-textarea', ['exports', 'ember-one-way-controls/components/one-way-textarea'], function (exports, _emberOneWayControlsComponentsOneWayTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTextarea['default'];
    }
  });
});
define('hstumblrapi/components/one-way-time', ['exports', 'ember-one-way-controls/components/one-way-time'], function (exports, _emberOneWayControlsComponentsOneWayTime) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTime['default'];
    }
  });
});
define('hstumblrapi/components/one-way-url', ['exports', 'ember-one-way-controls/components/one-way-url'], function (exports, _emberOneWayControlsComponentsOneWayUrl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayUrl['default'];
    }
  });
});
define('hstumblrapi/components/one-way-week', ['exports', 'ember-one-way-controls/components/one-way-week'], function (exports, _emberOneWayControlsComponentsOneWayWeek) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayWeek['default'];
    }
  });
});
define('hstumblrapi/controllers/favorites', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            search: function search() {
                var tumblrUrlBase = 'https://api.tumblr.com/v2/blog/';
                var tabParams = this.get('tagSearch') ? '?tag=' + this.get('tagSearch') : '';
                var self = this;

                $.ajax({
                    type: 'GET',
                    url: tumblrUrlBase + this.get('blogSearch') + '.tumblr.com/posts' + tabParams,
                    dataType: 'jsonp',
                    data: {
                        api_key: 'NDz2IGvmHx0zJVeKiCznoVwcq4ge8u1mHlmLphdZG0QZDA4kOx'
                    },
                    fail: function fail(err) {
                        self.set('noResults', true);
                        self.set('tumblrFeed', tumblrFeed);
                        console.log('Tumblr api call failed :: ', err);
                    },
                    success: function success(data) {
                        var tumblrFeed = data.response;
                        console.log('Got search results: ', tumblrFeed);

                        if (tumblrFeed.posts.length == 0) {
                            self.set('noResults', true);
                            self.set('tumblrFeed', tumblrFeed);
                        } else {
                            self.set('noResults', false);

                            for (var i = 0; i < tumblrFeed.posts.length; i++) {
                                if (tumblrFeed.posts[i].type == 'text') {
                                    tumblrFeed.posts[i].displaySummary = tumblrFeed.posts[i].body;
                                } else if (tumblrFeed.posts[i].type == 'link') {
                                    tumblrFeed.posts[i].displaySummary = tumblrFeed.posts[i].url;
                                    tumblrFeed.posts[i].typeLink = true;
                                } else if (tumblrFeed.posts[i].type == 'photo') {
                                    tumblrFeed.posts[i].displaySummary = '<img src="' + tumblrFeed.posts[i].photos[0].original_size.url + '" alt="" />';
                                } else {
                                    //Would repeat custom field for each post type...
                                    //Per the api documentation there are 8 types of posts
                                    //https://www.tumblr.com/docs/en/api/v2#blog_methods
                                    //The point here is a custom field is added for the main summary to display, which varies depending on the post type
                                    tumblrFeed.posts[i].displaySummary = tumblrFeed.posts[i].summary;
                                }
                            }

                            Object.assign(tumblrFeed, { 'blog': data.response.blog });
                            self.set('tumblrFeed', tumblrFeed);
                        }
                    }
                });
            },

            addToFavorites: function addToFavorites(postId) {
                var tumblrFeed = this.get('tumblrFeed');

                for (var i = 0; i < tumblrFeed.posts.length; i++) {
                    if (tumblrFeed.posts[i].id == postId) {
                        if (this.get('favorites')) {
                            this.get('favorites').pushObject({ 'post': tumblrFeed.posts[i], 'blog': tumblrFeed.blog });
                        } else {
                            this.set('favorites', [{ 'post': tumblrFeed.posts[i], 'blog': tumblrFeed.blog }]);
                        }
                    }
                }
            },

            removeFromFavorites: function removeFromFavorites(favId) {
                var favorites = this.get('favorites') || [];

                var post = this.get('favorites').findBy('post.id', favId);
                this.get('favorites').removeObject(post);
            }
        }
    });
});
define('hstumblrapi/helpers/app-version', ['exports', 'ember', 'hstumblrapi/config/environment'], function (exports, _ember, _hstumblrapiConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _hstumblrapiConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('hstumblrapi/helpers/contains', ['exports', 'ember-form-for/helpers/contains'], function (exports, _emberFormForHelpersContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersContains.contains;
    }
  });
});
define('hstumblrapi/helpers/eq', ['exports', 'ember'], function (exports, _ember) {
  exports.eq = eq;

  // const eq = (params) => params[0] === params[1];
  // export default Ember.Helper.helper(eq);

  function eq(params /*, hash*/) {
    return params;
  }

  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('hstumblrapi/helpers/form-for/humanize', ['exports', 'ember-form-for/helpers/form-for/humanize'], function (exports, _emberFormForHelpersFormForHumanize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersFormForHumanize['default'];
    }
  });
  Object.defineProperty(exports, 'formForHumanize', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersFormForHumanize.formForHumanize;
    }
  });
});
define('hstumblrapi/helpers/form-for/merge-custom-form-field', ['exports', 'ember-form-for/helpers/form-for/merge-custom-form-field'], function (exports, _emberFormForHelpersFormForMergeCustomFormField) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersFormForMergeCustomFormField['default'];
    }
  });
  Object.defineProperty(exports, 'formForMergeCustomFormField', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersFormForMergeCustomFormField.formForMergeCustomFormField;
    }
  });
});
define('hstumblrapi/helpers/is-equal', ['exports', 'ember-form-for/helpers/is-equal'], function (exports, _emberFormForHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForHelpersIsEqual['default'];
    }
  });
});
define('hstumblrapi/helpers/one-way-select/contains', ['exports', 'ember-one-way-controls/helpers/one-way-select/contains'], function (exports, _emberOneWayControlsHelpersOneWaySelectContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsHelpersOneWaySelectContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsHelpersOneWaySelectContains.contains;
    }
  });
});
define('hstumblrapi/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('hstumblrapi/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('hstumblrapi/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'hstumblrapi/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _hstumblrapiConfigEnvironment) {
  var _config$APP = _hstumblrapiConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('hstumblrapi/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('hstumblrapi/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('hstumblrapi/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('hstumblrapi/initializers/export-application-global', ['exports', 'ember', 'hstumblrapi/config/environment'], function (exports, _ember, _hstumblrapiConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_hstumblrapiConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _hstumblrapiConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_hstumblrapiConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('hstumblrapi/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('hstumblrapi/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('hstumblrapi/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("hstumblrapi/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('hstumblrapi/instance-initializers/form-for-initializer', ['exports', 'ember', 'hstumblrapi/config/environment'], function (exports, _ember, _hstumblrapiConfigEnvironment) {
  exports.initialize = initialize;
  var merge = _ember['default'].merge;
  var set = _ember['default'].set;

  var DEFAULT_CONFIG = {
    buttonClasses: ['form-button'],
    fieldClasses: ['form-field'],
    fieldHasErrorClasses: ['form-field--has-errors'],
    errorClasses: ['form-field--errors'],
    hintClasses: ['form-field--hint'],
    inputClasses: ['form-field--control'],
    labelClasses: ['form-field--label'],
    resetClasses: ['form-button--reset'],
    submitClasses: ['form-button--submit']
  };

  function initialize(application) {
    var formForConfig = merge(DEFAULT_CONFIG, _hstumblrapiConfigEnvironment['default']['ember-form-for']);
    var configService = application.lookup('service:ember-form-for/config');

    Object.keys(formForConfig).forEach(function (key) {
      set(configService, key, formForConfig[key]);
    });
  }

  exports['default'] = {
    name: 'form-for-initializer',
    initialize: initialize
  };
});
define('hstumblrapi/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('hstumblrapi/router', ['exports', 'ember', 'hstumblrapi/config/environment'], function (exports, _ember, _hstumblrapiConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _hstumblrapiConfigEnvironment['default'].locationType,
    rootURL: _hstumblrapiConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('favorites');
  });

  exports['default'] = Router;
});
define('hstumblrapi/routes/favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('hstumblrapi/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('hstumblrapi/services/ember-form-for/config', ['exports', 'ember-form-for/services/ember-form-for/config'], function (exports, _emberFormForServicesEmberFormForConfig) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFormForServicesEmberFormForConfig['default'];
    }
  });
});
define("hstumblrapi/templates/favorites", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VOmmKoLE", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"header\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Exploring Tumlbr API\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"A simple app, powered by EmberJS\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"main\",[]],[\"static-attr\",\"role\",\"main\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"input-panel\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"noResults\"]]],null,7],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"search\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Search Tumblr posts by name or tag!\"],[\"close-element\"],[\"text\",\"\\n\\n            \"],[\"open-element\",\"fieldset\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"blogSearch\"],[\"flush-element\"],[\"text\",\"Blog Name\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"name\",\"type\",\"placeholder\"],[[\"get\",[\"blogSearch\"]],\"blogSearch\",\"text\",\"blog name\"]]],false],[\"text\",\"\\n\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"tagSearch\"],[\"flush-element\"],[\"text\",\"Tag\"],[\"close-element\"],[\"text\",\"\\n                 \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"name\",\"type\",\"placeholder\"],[[\"get\",[\"tagSearch\"]],\"tagSearch\",\"text\",\"tag\"]]],false],[\"text\",\"\\n\\n                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"search-submit\"],[\"static-attr\",\"type\",\"submit\"],[\"flush-element\"],[\"text\",\"Search\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"results-panel\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Results:\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"noResults\"]]],null,6],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"tumblrFeed\",\"posts\"]]],null,5],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"favorites-panel\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Favorites:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"favorites\"]]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"get\",[\"tag\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"tag\"]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"article\",[]],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"highlight-number\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"favorite\",\"blog\",\"likes\"]],false],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"favorite\",\"post\",\"post_url\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"favorite\",\"post\",\"blog_name\"]],false],[\"close-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\" - \"],[\"append\",[\"unknown\",[\"favorite\",\"blog\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"favorite\",\"post\",\"date\"]],false],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"favorite\",\"post\",\"displaySummary\"]],true],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"favorite\",\"post\",\"tags\"]]],null,0],[\"text\",\"                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"removeFromFavorites\",[\"get\",[\"favorite\",\"post\",\"id\"]]]],[\"flush-element\"],[\"text\",\"Remove\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"favorite\"]},{\"statements\":[[\"text\",\"                            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"get\",[\"tag\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"tag\"]},{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"displaySummary\"]],true],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                        \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"post\",\"displaySummary\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"displaySummary\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"article\",[]],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"highlight-number\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"tumblrFeed\",\"blog\",\"likes\"]],false],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"post\",\"post_url\"]]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"blog_name\"]],false],[\"close-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\" - \"],[\"append\",[\"unknown\",[\"tumblrFeed\",\"blog\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"date\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"post\",\"typeLink\"]]],null,4,3],[\"text\",\"                    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"post\",\"tags\"]]],null,2],[\"text\",\"                    \"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addToFavorites\",[\"get\",[\"post\",\"id\"]]]],[\"flush-element\"],[\"text\",\"Add\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"post\"]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"alert\"],[\"flush-element\"],[\"text\",\":-( No matches found...\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"alert\"],[\"flush-element\"],[\"text\",\"Sorry, no results where found for your search.\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "hstumblrapi/templates/favorites.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('hstumblrapi/config/environment', ['ember'], function(Ember) {
  var prefix = 'hstumblrapi';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("hstumblrapi/app")["default"].create({"name":"hstumblrapi","version":"0.0.0+613799b7"});
}

/* jshint ignore:end */
//# sourceMappingURL=hstumblrapi.map
