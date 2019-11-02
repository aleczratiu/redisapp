const express = require('express');
const exphbs = require('express-handler');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

const app = express();

app.engine
