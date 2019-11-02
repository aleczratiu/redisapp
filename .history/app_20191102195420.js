const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

let client = redis.createClient();

client.on('connect', function(){
    console.log('Connected to Redis...');
});

const port = 3000;

const app = express();

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// methodOverride
app.use(methodOverride('_method'));

// Search Page
app.get('/', function(req, res, next){
  res.render('searchusers');
});

app.post('/user/search', function(req, res, next) {
    let id = req.body.id;

    client.hgetall(id, function(err, res) {
        if (!res) {
            res.render('searchusers', {
                error: 'User does not exist',
            });
        } else {

        }
    });
})

app.listen(port, function(){
  console.log('Server started on port '+port);
});
