Twitter.UserController = Ember.ObjectController.extend({
  backgroundPic: function() {
    return this.get('model.user.profile_banner_url');
  }.property('model.user.profile_banner_url'),

  profilePic: function() {
    return this.get('model.user.profile_image_url');
  }.property('model.user.profile_image_url'),

  numTweets: function() {
    return this.parseNum(this.get('model.user.statuses_count'));
  }.property('model.user.statuses_count'),

  numFollowing: function() {
    return this.parseNum(this.get('model.user.friends_count'));
  }.property('model.user.friends_count'),

  numFollowers: function() {
    return this.parseNum(this.get('model.user.followers_count'));
  }.property('model.user.followers_count'),

  parseNum: function(number) {
    if (number < 10000) {
      return number;
    }
    if (number < 1000000) {
      return (Math.floor(number / 100) / 10) + "K";
    }
    return (Math.floor(number / 10000) / 100) + "M";
  }
});

Twitter.TweetController = Ember.ObjectController.extend({
  parseTweet: function() {
    console.log("in parseTweet");
    var text = this.get("model");
    var regex = new RegExp("[@#]\\w*", 'g');

    // format all the screen names and hashtags
    text = text.replace(regex, function(match) {
      var newStr = "<span class='link-prefix'>";
      newStr += match[0] + "</span><a>";
      newStr += match.substring(1, match.length) + "</a>";
      return newStr;
    });

    //format all the links
    regex = new RegExp("(http)s*://\\S*", "gi");
    text = text.replace(regex, "<a>$&</a>");
    return text;
  }.property("model")
});

