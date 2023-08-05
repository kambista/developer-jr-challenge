//consultas a la db

const gettasks = "SELECT * FROM tasks";
const addtask= "INSERT INTO tasks (title, description) VALUES ($1, $2)"
const deletetask = "DELETE FROM tasks WHERE id = $1";

module.exports = {
    gettasks,
    deletetask,
    addtask
}