Twitter.TwitterController = Ember.ObjectController.extend({
  actions: {
    findUser: function(){
      var name = this.get('screen_name');
      name = name.replace('@', '');
      this.set('searchingFor', name);
      this.set('screen_name', '');

      this.transitionToRoute('user', name);
    }
  },

  screen_name: '',
  searchingFor:''
});

Twitter.TwitterFailController = Ember.ObjectController.extend({
  needs: "twitter",
});

Twitter.TwitterLoadingController = Ember.ObjectController.extend({
  needs: "twitter"
});
