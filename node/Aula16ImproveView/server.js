const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const path = require('path');
const routes = require('./routes');
const { MiddlewareGlobal } = require('./src/middlewares/middleware');;


// const conectionString = 'mongodb+srv://yansena:XnSVmCy9bKsam3TI@cluster0.xgpysqh.mongodb.net/?retryWrites=true&w=majority'

//TODO: Create env with string connection of Atlas MongoDB.

mongoose.connect(process.env.CONECTION_STRING).then(() => {
  console.log('Conection successful');
  app.emit('done')
}).catch( e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');



app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');

const sessionOptions = session({
  secret: 'a2b34yy23b4y34b62b45624k5624n56jk',
  store: MongoStore.create({
    mongoUrl: process.env.CONECTION_STRING
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

//middlewares
app.use(MiddlewareGlobal);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
 
app.on('done', () => {
  app.listen(3333);
})