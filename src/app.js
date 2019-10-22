const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const controllers = require('./controllers');

const app = express();
app.set('port', process.env.PORT || 7000);
app.disable('x-powered-by');
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs',
  exphbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }));
app.set('view engine', 'hbs');
app.use(express.static('public'));
const middleware = [
  helmet(),
  compression(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
];
app.use(middleware);
app.use(controllers);

module.exports = app;
