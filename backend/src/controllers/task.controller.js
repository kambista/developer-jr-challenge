const queries = require('../database/queries');
const pool = require('../database/db');

const gettasks = (req, res) => {
    pool.query(queries.gettasks, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const posttasks = (req, res) =>{
    const {title, description} =  req.body;

    if( title && description){

        pool.query(queries.addtask, [title, description], (error, results) => {
            if(error) throw error;
            res.status(201).json("tarea creada correctamente")
        })

        //const id = tasks.length>0 ? tasks[tasks.length-1].id + 1 : tasks.length+1;
        //const newtask = {id, ...req.body};
        //console.log(newtask);
        //tasks.push(newtask);
        //res.json(tasks);
    }else{
        res.json('ERROR')
    }
}

const deletetask = (req, res) => {
    
    const id = parseInt(req.params.id);
    pool.query(queries.deletetask, [id], (error, results) => {
        const notask = !results.rows.length;
        if(notask){
            res.json("No existe la tarea");
        }
    });
}


module.exports = {
    gettasks,
    posttasks,
    deletetask
}