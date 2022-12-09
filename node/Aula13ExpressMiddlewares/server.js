const express = require('express');
const app = express();
const path = require('path')

const routes = require('./routes')
const mymid = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(mymid);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
 

app.listen(3333);