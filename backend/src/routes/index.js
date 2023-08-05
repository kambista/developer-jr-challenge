const e = require('express');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

l = [];
n = 0;
dic = {};

router.get('/', (req, res) => {
    res.sendFile(
        'home.html',
        {root: ('../frontend')}
    )
    
});

//Envio de css
router.get('/home.css', (req, res) => {
    res.sendFile(
        'home.css',
        {root: ('../frontend')}
    )
});

//Envio de js
router.get('/home.js', (req, res) => {
    res.sendFile(
        'home.js',
        {root: ('../frontend')}
    )
});


router.post('/tarea', (req, res) => {
    dic = {
        id: n++,
        cuerpo: req.body
    }

    l.push(dic)
    console.log(l);
    res.redirect('/');
})

router.get('/tareas', (req, res) => {
    res.json(l);
})

router.get('/tarea/:id', (req, res) => {
    const {id} = req.params;
    l.forEach((element, index) => {
        if(element.id == id){
            l.splice(index,1);
        }
    });
    console.log("Tarea eliminada")
    res.json(l);
})

module.exports = router;