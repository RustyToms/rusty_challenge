Twitter.TwitterController = Ember.ObjectController.extend({
  actions: {
    findUser: function(){

      // this.set('isLoading', true);
      // var result = Ember.$.getJSON(
      //   'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' +
      //   this.get('screen_name') + '&count=15');

      // result.then(this.fulfill, reject);

      // function fulfill(answer) {
      //   this.set('screen_name', '');
      //   this.set('isLoading', false);
      //   console.log(answer);
      // }

      // function reject(reason) {
      //   this.set('failed_name', this.get('screen_name'));
      //   this.set('screen_name', '');
      //   this.set('isLoading', false);
      //   this.set('notFound', true);
      // }
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

