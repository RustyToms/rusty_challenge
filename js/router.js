Twitter.Router.map(function() {
  this.resource('twitter', {path: '/'}, function(){
    this.resource('account', {path: '/:account_username'});
  });
});

Twitter.AccountRoute = Ember.Route.extend({
  model: function(params) {
    // use twitter API to retrieve info from username provided as params
  },

  serialize: function(account) {
    return {username: account.get('username')};
  }
});
