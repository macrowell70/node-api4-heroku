const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: "request has been received" })
})

module.exports = server;