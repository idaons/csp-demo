const express = require('express');
const server = express();
const port = 1337;
const helmet = require('helmet');

// ------ CSP -------
/*
server.use(helmet());
server.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'none'"],
    }
}));
*/

server.use(express.static('src'));
server.listen(port);
