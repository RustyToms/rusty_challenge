class UsersController < ApplicationController

  def new

    client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV["CONSUMER_KEY"]
      config.consumer_secret =  ENV["CONSUMER_SECRET"]
      config.access_token = ENV["ACCESS_TOKEN"]
      config.access_token_secret = ENV["ACCESS_TOKEN_SECRET"]
    end

    info = {
      "user" => client.user(params["screen_name"]),
      "trends" => client.trends,
      "retweets" => client.retweeted_by_user(params["screen_name"])
    }

    render json: info
  end
end
