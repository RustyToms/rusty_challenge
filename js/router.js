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

Twitter.TwitterController = Ember.ObjectController.extend({
  actions: {
    findUser: function(){
      console.log(this.screen_name);
      this.set('notFound', true);
      this.set('failed_name', this.get('screen_name'));
      this.set('screen_name', '');
    }
  },

  screen_name: '',
  notFound: false,
  isLoading: true,
  failed_name: ''
});

Twitter.TwitterIndexController = Ember.ObjectController.extend({
  needs: "twitter",
  twitter: Ember.computed.alias("controllers.twitter")
});
