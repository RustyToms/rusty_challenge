Twitter.Router.map(function() {
  this.resource('twitter', {path: '/'}, function(){
    this.resource('user', {path: '/user/:screen_name'});
  });
});

Twitter.IndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('twitter');
  }
});

Twitter.UserRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
    that.store.find('user', {screen_name: params});
  },

  serialize: function(user) {
    return {screen_name: user.get('screen_name')};
  }
});

