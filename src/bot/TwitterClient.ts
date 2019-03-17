var Twitter = require('twitter');

export default class TwitterClient{
    constructor(){
        var client = new Twitter({
            consumer_key: process.env.consumerKey,
            consumer_secret: process.env.consumerSecret,
            access_token_key: process.env.accessTokenKey,
            access_token_secret: process.env.accessTokenSecret
        });
    }
}