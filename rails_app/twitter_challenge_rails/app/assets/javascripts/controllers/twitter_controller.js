Twitter.TwitterController = Ember.ObjectController.extend({
  actions: {
    findUser: function(){
      console.log('in #findUser ' + this.get('screen_name'));
      // this.set('isLoading', true);
      console.log(this);
      var result = Ember.$.getJSON(
        '/oauth/new?screen_name=' + this.get('screen_name'));

      result.then(fulfill, reject);

      function fulfill(answer) {
        console.log('success');
        console.log(answer);
      }

      function reject(reason) {
        console.log("failure");
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

