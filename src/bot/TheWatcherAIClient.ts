'use strict';
import * as express from 'express';
import TwitterClient from './TwitterClient';
var https = require('https');


class TheWatcherAIClient {
    // eslint-disable-next-line no-use-before-define
    public express;
    // eslint-disable-next-line no-use-before-define

    private twitterClient;

    constructor() {
        this.express = express();
        this.twitterClient = new TwitterClient();
    }

    private think(): Promise<String> {
        //https://www.reddit.com/r/news.json

        let topics = [
            '/r/news.json',
            '/r/streetart.json',
            '/r/holdmyjuicebox.json', //not pretty enough
            '/r/BikiniBottomTwitter.json',
            '/r/bestofnetflix.json',
            '/r/UpliftingNews.json'
        ]

        var rand = Math.floor(Math.random() * Math.floor(topics.length));

        return new Promise((resolve, reject) => {
            https.get({
                hostname: 'www.reddit.com',
                path: topics[rand],
                agent: false  // Create a new agent just for this one request
            }, (res) => {
                res.setEncoding('utf8');
                let rawData = '';

                res.on('data', chunk => rawData += chunk);
                res.on('end', () => {
                    // console.log(rawData);
                    let body = JSON.parse(rawData);

                    console.log(body);
                    var random = Math.floor(Math.random() * Math.floor(body.data.children.length));
                    var post = body.data.children[random].data;
                    // post.url;
                    // post.title;
                    console.log(post);
                    //make sure tweets are always under 280;
                    let thought = `${post.title} ${post.url}`;
                    console.log(thought);
                    // throw Error("just cz");
                    resolve(thought);
                });

                // Do stuff with response

            });
        })
    }

    public get routes() {
        const router = express.Router();

        router.get('/', (req, res) => {
            res.json({
                message: 'Hello bot!'
            })
        });

        router.post('/', async (req, res) => {

            let thinkPromise = new Promise((resolve, reject) => {
                this.think().then(thought => {
                    console.log('thought successful');
                    this.twitterClient.post(thought).then(res => {
                        console.log('post successful');
                        resolve()
                    }, err => {
                        throw "thought error";
                    });
                }).catch(err => {
                    console.log(err);
                    res.status(500).send(err);
                });
            });

            let result = await thinkPromise;
            res.status(200).send('twitter status updated');
        });

        return router;
    }
}

// export default new Bot().routes;
export { TheWatcherAIClient };