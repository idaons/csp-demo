const express = require('express');
const server = express();
const port = 3000;
var path = require('path');
var helmet = require('helmet')



/*CSP*/
server.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ['\'none\''],
        mediaSrc: ['\'self\''],
        scriptSrc: ['\'self\'', 'https://www.google-analytics.com'],
        objectSrc: ['\'none\''],
        frameAncestors: ['\'none\''],
        formAction: ['\'self\''],
        styleSrc: ['\'self\''],
        fontSrc: ['\'self\'', 'data:', 'https://fonts.gstatic.com'],
        imgSrc: ['\'self\'', 'data:', 'https://www.google-analytics.com'],
        connectSrc: ['\'self\'', 'https://www.google-analytics.com'],
        frameSrc: ['\'self\'', 'https://video.qbrick.com']
    }
}));

/*Start server*/

server.use(express.static('src'));
server.use('/public', express.static('src'));

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(port);
