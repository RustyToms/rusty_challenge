#Twitter Home Page Clone#

This little app provides the last 20 retweets for any user who has not made them private. It shows retweets so you don't have to log in to see the homepage feed, but you still get a variety in whose tweets you see. You can search for any real life user, and you can add new tweets which will appear on the feed (but won't actually be sent). It is intentional that none of the links are functional.

I hosted the page on Heroku, so though it might take a second for the server to spin up, all you have to do is click on this link: http://enigmatic-eyrie-1009.herokuapp.com/

Everything that is supposed to work works, except you need to use the search bar to look up twitter users, you can't use the address bar.

I was going to make this a very very simple single page app with no backend at all, but Twitter has a really annoying version of oAuth that required me to create a backend, so I had to port everything over to a rails app. I don't even use the database, the backend is only needed for the Twitter API. However, I was ablt to use the rails asset pipeline, which cleans up all the javascripts into one file.

#The Process#

I started by using HTML and CSS (using Sass) to make an exact replica of the picture given to me. I designed it in Chrome at half the scale (the picture was 2877 x 1707), and it looks fine in Firefox and Safari, but it isn't pixel perfect in those browsers. I couldn't get it pixel perfect in Chrome, because some fonts and spacing where in between what was available to me because I cut the dimensions in half. Here is a link to the static page, there are buttons on the top left where you can toggle the picture as an overly to see how it matches with the website: http://enigmatic-eyrie-1009.herokuapp.com/static_example

I then incorporated Ember.js, moved everything over to a rails app, except for the pictures which I kept in an Amazon S3 bucket, and integrated the Twitter API. The tweets are parsed to provide links and formatting like the real site, and pictures are previewed as well.

##Technology used##

  - Ruby on Rails
  - JavaScript
  - Ember.js
  - HTML 5
  - CSS
  - Sass
  - Twitter API
  - Heroku
  - Devise
  - Figaro
  - Moment.js