const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskroutes = require('./routes/tasks');
const app = express();

//seteo de port
app.set('port', 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors()); 

//routes
app.use( "/api/tasks" ,taskroutes);


//server
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});

//Puede iniciar con el comando npm run dev
//http://localhost:3000/api/tasks