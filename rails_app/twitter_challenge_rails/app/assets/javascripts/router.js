Twitter.Router.map(function() {
  this.resource('twitter', {path: '/'}, function(){
    this.route('fail');
    this.route('loading');
    this.resource('user', {path: ':screen_name'});
  });
});

Twitter.UserRoute = Ember.Route.extend({
  model: function(params) {
    var that = this;
    var promise = Ember.$.getJSON('/users/new?screen_name=' +
      params['screen_name']);

    promise.then(fulfill, reject);

    function fulfill (answer) {
      answer.tweets = [];
      var user = that.store.createRecord('user', answer);

      return user;
    }

    function reject (reason) {
      that.transitionTo('twitter.fail');
    }

    return promise;
  },

  serialize: function(user) {
    return {screen_name: user.get('user.screen_name')};
  }
});

