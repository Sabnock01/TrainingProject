const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));