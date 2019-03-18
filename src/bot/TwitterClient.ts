'use strict';
import { reporters } from "mocha";

var Twitter = require('twitter');

export default class TwitterClient {
    private client;
    
    constructor() {
        this.client = new Twitter({
            consumer_key: process.env.consumerKey,
            consumer_secret: process.env.consumerSecret,
            access_token_key: process.env.accessTokenKey,
            access_token_secret: process.env.accessTokenSecret
        });
    }

    public post(updateStr): Promise<any> {
        //validate
        //log string
        if (!updateStr) {
            //throwError
        }
        return new Promise(
            (resolve, reject) => {

                this.client.post('statuses/update', { status: updateStr }, function (error, tweet, response) {
                    if (error) reject(error);
                    console.log(tweet);  // Tweet body. //log tweet body
                    console.log(response);  // Raw response object. //log tweet body
                    resolve(response.id); //return a better object
                });
                
            }
        )
    }
}