Twitter.Router.map(function() {
  this.resource('twitter', {path: '/'}, function(){
    this.resource('account', {path: '/:screen_name'});
  });
});

Twitter.IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('twitter');
  }
});

Twitter.AccountRoute = Ember.Route.extend({
  model: function(params) {
    // use twitter API to retrieve info from username provided as params
    return Ember.$.getJSON('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=params$count=15');
  },

  serialize: function(account) {
    return {screen_name: account.get('screen_name')};
  }
});

