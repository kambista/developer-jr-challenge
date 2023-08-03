const { Pool } = require ('pg');

const getTasks =  (req, res) => {
    res.send('tasks');
}

module.exports = {
    getTasks
}