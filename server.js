require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = mongoose.connection;

const configDB = require('./config/database.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
});

connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err}`)
})

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
// app.use(bodyParser());
// app.use(bodyParser.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'changethistosomething',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);

app.listen(port, () => {
    console.log(`Magic is happening on port ${port}`)
})
