const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const morgan = require('morgan');
const app = express();

app.set('port', 3000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/tasks'));


//Servidor
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});