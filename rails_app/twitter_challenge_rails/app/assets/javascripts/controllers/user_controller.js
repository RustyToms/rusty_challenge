Twitter.UserController = Ember.ObjectController.extend({
  backgroundPic: function(){
    var model = this.get('model');
    return model.get('user.profile_banner_url');
  }.property('model.user.profile_banner_url'),

  profilePic: function(){
    var model = this.get('model');
    return model.get('user.profile_image_url');
  }.property('model.user.profile_image_url')
});

