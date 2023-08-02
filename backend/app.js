import express from 'express'
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodoById,
} from './database.js'

const app = express();
app.use(express.json());

// Configurar Swagger
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Nombre de tu API',
        version: '1.0.0',
        description: 'Descripción de tu API',
      },
    },
    apis: ['app.js'],
  };
  
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  

app.get('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await getTodoById(id);
        
        if (todo) {
            res.status(200).json({ data: todo, status: true});
        } else {
            res.status(404).json({ error: 'Tarea no encontrada', status: false});
        }
    } catch (error) {
        res.status(500).json({ error: error.message, status: false});
    }
});

app.get('/todos', async (req, res) => {
    try {
        const todos = await getTodos();
        res.status(200).json({ data: todos, status: true});
    } catch (error) {
        res.status(500).json({ error: error.message, status: false});
    }
});

app.post('/todos', async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            res.status(400).json({ error: 'Datos incompletos', status: false});
            return;
        }

        const id = await createTodo(
            title,
            description,
        );
        
        const todos = await getTodos();
        res.status(201).json({ data: todos, status: true});
    } catch (error) {
        res.status(500).json({ error: error.message, status: false});
    }
});

app.put('/todos/:id', async (req, res) => {
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
});


app.delete('/todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await getTodoById(id);
        if (!todo) {
            res.status(404).json({ error: 'Tarea no encontrada', status: false});
            return;
        }
        const result = await deleteTodoById(id);

        res.status(204)
    } catch (error) {
        res.status(500).json({ error: error.message, status: false});
    }
});

app.listen(8089, () => {
    console.log('Servidor web iniciado');
});







