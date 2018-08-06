var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser')
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var ms = require('connect-mongo')(session);
var flash = require('express-flash')

var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + 'public')));
app.use(bodyParser.json());
app.use(flash())
app.use(cookieParser());
app.use(session({
    secret: 'sec',
    resave: true,
    saveUninitialized: true,
    store: new ms({ mongooseConnection: mongoose.connection })
}))

//connect db
mongoose.connect('mongodb://localhost:27017/FamilyTree')
mongoose.Promise = global.Promise;

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')

var indexRoute = require('./controllers/index')
var userRoute = require('./routes/user')


app.use('/details', require('./routes/details'))


//app.use('/',indexRoute);
app.use('/users', userRoute)


//error handling

app.use(function (err, req, res, next) {
    //console.log(err)
    res.status(422).send({ error: err.message })
})


app.listen(3001, function () {
    console.log('connected at 3001');

})
