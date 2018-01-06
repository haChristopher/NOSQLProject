/*jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const redis = require('redis');
const app = express();
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

// API file for interacting with MongoDB
const history = require('./server/routes/history');
const user = require('./server/routes/users');

//Create connection to redis for session handling
app.use(session({
    store: new RedisStore({ host: 'localhost', port: 6379, client: redis.createClient()}),
    secret: 'Chillig',
    resave: false,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var cors = require('cors');
// use it before all route definitions
app.use(cors({origin: '*'}));

//start Socketserver
var socketServer = require('./server/connections/socketIoServer');
socketServer.start();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', history);
app.use('/api/sql', user);

// Send all other requests to the Angular app
// Also create Session
app.get('*', (req, res) => {
  //req.session.key=req.body.email;
  console.log("session created");
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
