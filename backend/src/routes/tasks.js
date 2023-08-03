const {Router} = require('express');
const router = Router();
const _ = require('underscore');


const tasks = require('../db.json');

router.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

router.post('/api/tasks', (req, res) =>{
    const {title, description} =  req.body;

    if( title && description){
        const id = tasks.length + 1;
        const newtask = {id, ...req.body};
        console.log(newtask);
        tasks.push(newtask);
        res.json(tasks);
    }else{
        res.send('ERROR')
    }
});



router.delete('/api/tasks/:id', (req, res) => {
    const { id }= req.params;
    _.each(tasks, (task, i) => {
        if(task.id == id){
            tasks.splice(i, 1);
            res.json(tasks);
        }
    });
});

module.exports = router;
