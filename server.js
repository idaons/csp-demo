const express = require('express');
const server = express();
const port = 1337;
const helmet = require('helmet');

// ------ CSP -------
server.use(helmet());
server.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      scriptSrc: ["'self'"],
      connectSrc: ['ironhack-pokeapi.herokuapp.com'],
      imgSrc: ["'self'", 'ironhack-pokeapi.herokuapp.com'],
      fontSrc: ['fonts.gstatic.com'],
      frameSrc: ['www.youtube.com'],
      styleSrc: ["'self'",'fonts.googleapis.com', "'sha256-1AEBufVZt2FioEw++D/tRmJhuJ1S/f9eBmgaVZR52Dg='"]
}
}));

server.use(express.static('src'));
server.listen(port);

