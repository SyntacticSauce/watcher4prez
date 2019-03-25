const https = require('https');

function twitterUpdate() {
    console.log('tweeting....');
	https.get({
        hostname: 'https://ooami-twitter-bot.herokuapp.com',
        path: "/api/thewatcher",
        agent: false  // Create a new agent just for this one request
    }, (res) => {
        console.log('twitter updated');
        res.setEncoding('utf8');
        let rawData = '';

        res.on('data', chunk => rawData += chunk);
        res.on('end', () => {
            
        });

        // Do stuff with response
       
    });
}

twitterUpdate();
