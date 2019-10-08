const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

const controllers = require('./controllers/index');

const app = express();

const middleware = [
    helmet(),
    compression(),
    bodyParser.urlencoded({ extended: false}),
    bodyParser.json(),
];
app.use(middleware);

app.set('port', process.env.PORT || 7000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs',
 exphbs({
extname: 'hbs',
defaultView: 'default',
layoutsDir: path.join(__dirname, 'views', 'pages'),
partialsDir: path.join(__dirname, 'views', 'partials'),
defaultLayout: 'main'
// helpers
})
);

app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(controllers);

module.exports = app;