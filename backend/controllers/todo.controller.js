import {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodoById,
} from '../config/database.js';

export async function getAllTodos(req, res) {
    try {
        const todos = await getTodos();
        res.status(200).json({ data: todos, status: true });
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
}

export async function getTodo(req, res) {
    try {
        const id = req.params.id;
        const todo = await getTodoById(id);

        if (todo) {
            res.status(200).json({ data: todo, status: true });
        } else {
            res.status(404).json({ error: 'Tarea no encontrada', status: false });
        }
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
}

export async function createNewTodo(req, res) {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            res.status(400).json({ error: 'Datos incompletos', status: false });
            return;
        }

        const id = await createTodo(title, description);

        const todos = await getTodos();
        res.status(201).json({ data: todos, status: true });
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
}

export async function updateExistingTodo(req, res) {
    try {
        const id = req.params.id;

        const todo = await getTodoById(id);
        if (!todo) {
            res.status(404).json({ error: 'Tarea no encontrada', status: false });
            return;
        }

        const { title, description, completed } = req.body;

        if (typeof title !== 'undefined') {
            todo.title = title;
        }

        if (typeof description !== 'undefined') {
            todo.description = description;
        }

        if (typeof completed !== 'undefined') {
            todo.completed = completed;
        }

        const result = await updateTodo(
            id,
            todo.title,
            todo.description,
            todo.completed
        );

        res.status(200).json({ data: result, status: true });
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
}

export async function deleteTodo(req, res) {
    try {
        const id = req.params.id;
        const todo = await getTodoById(id);

        if (!todo) {
            res.status(404).json({ error: 'Tarea no encontrada', status: false });
            return;
        }

        const result = await deleteTodoById(id);
        console.log(result)
        if (result===true) {
            res.status(204).json({ data: "Eliminado con éxito", status: true });
        } else {
            res.status(500).json({ error: 'Error al eliminar la tarea', status: false });
        }
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
}
