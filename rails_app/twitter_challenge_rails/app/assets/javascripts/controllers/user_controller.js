Twitter.UserController = Ember.ObjectController.extend({
  backgroundPic: function(){
    return this.get('model.user.profile_banner_url');
  }.property('model.user.profile_banner_url'),

  profilePic: function(){
    return this.get('model.user.profile_image_url');
  }.property('model.user.profile_image_url')
});

