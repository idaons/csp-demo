const express = require('express');
const server = express();
const port = 1337;
const helmet = require('helmet');

// ------ CSP -------
<<<<<<< HEAD
server.use(helmet());
server.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      imgSrc: ["'self'", 'ironhack-pokeapi.herokuapp.com'],
      connectSrc: ['ironhack-pokeapi.herokuapp.com'],
      fontSrc: ['fonts.gstatic.com'],
      frameSrc: ['www.youtube.com'],
      styleSrc: ["'self'",'fonts.googleapis.com', "'sha256-1AEBufVZt2FioEw++D/tRmJhuJ1S/f9eBmgaVZR52Dg='"],
      scriptSrc: ["'self'"],
}
}));
=======
/*
server.use(helmet());
server.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'none'"],
    }
}));
*/
>>>>>>> 00e4226092e661c4c3dd9ac9c9b50359f4f60dba

server.use(express.static('src'));
server.listen(port);

