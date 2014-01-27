Twitter.TwitterController = Ember.ObjectController.extend({
  actions: {
    findUser: function(){
      var that = this;
      var name = that.get('screen_name');
      that.set('screen_name', '');
      console.log('in #findUser ' + name);
      this.set('isLoading', true);

      var result = Ember.$.getJSON('/oauth/new?screen_name=' + name);

      result.then(fulfill, reject);

      function fulfill(answer) {
        console.log('success');
        console.log(answer);

        that.set('isLoading', false);
        var user = that.store.createRecord('user', answer);
myUser = user;
        that.transitionToRoute('user', user);
      }

      function reject(reason) {
        console.log("failure");
        that.set('failed_name', name);
        that.set('isLoading', false);
        that.set('notFound', true);
      }
    }
  },

  screen_name: '',
  notFound: false,
  isLoading: false,
  failed_name: ''
});

Twitter.TwitterIndexController = Ember.ObjectController.extend({
  needs: "twitter",
  twitter: Ember.computed.alias("controllers.twitter")
});

