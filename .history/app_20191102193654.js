const express = require('express');
const exphbs = require('express-handler');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParse.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/', function(req, res, next) {
    res.render('searchuser.handlebars');
});

app.listen(3000, function() {
    console.log('Server running on port 3000')
});
