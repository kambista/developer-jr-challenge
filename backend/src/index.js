const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskroutes = require('./routes/tasks');
const app = express();

app.set('port', 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//routes
app.use( "/api/tasks" ,taskroutes);


//Servidor
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});