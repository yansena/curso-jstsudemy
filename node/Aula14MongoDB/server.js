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

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');

//middlewares
app.use(MiddlewareGlobal);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
 
app.on('done', () => {
  app.listen(3333);
})