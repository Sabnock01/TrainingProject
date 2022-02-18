require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routers");

const PORT = 8000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
