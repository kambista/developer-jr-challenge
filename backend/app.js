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
      components: {
        schemas: {
          Todo: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              title: { type: 'string' },
              description: { type: 'string' },
              completed: { type: 'boolean', default: false },
            },
          },
        },
      },
    },
    apis: ['app.js'],
  };
  
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Endpoints para operaciones relacionadas con tareas (todos)
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida correctamente
 *       500:
 *         description: Error del servidor
 */
app.get('/todos', async (req, res) => {
    try {
        const todos = await getTodos();
        res.status(200).json({ data: todos, status: true});
    } catch (error) {
        res.status(500).json({ error: error.message, status: false});
    }
});

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Endpoints para operaciones relacionadas con tareas (todos)
 */

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Obtener una tarea por su ID
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la tarea a obtener
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *                 status:
 *                   type: boolean
 *                   default: true
 *       404:
 *         description: Tarea no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Tarea no encontrada
 *                 status:
 *                   type: boolean
 *                   default: false
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 status:
 *                   type: boolean
 *                   default: false
 */
app.get('/todos/:id', async (req, res) => {
    // Lógica para obtener una tarea por su ID
  });
  
  /**
   * @swagger
   * /todos:
   *   post:
   *     summary: Crear una nueva tarea
   *     tags: [Todos]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Todo'
   *     responses:
   *       201:
   *         description: Tarea creada exitosamente
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   $ref: '#/components/schemas/Todo'
   *                 status:
   *                   type: boolean
   *                   default: true
   *       400:
   *         description: Datos incompletos
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   example: Datos incompletos
   *                 status:
   *                   type: boolean
   *                   default: false
   *       500:
   *         description: Error del servidor
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                 status:
   *                   type: boolean
   *                   default: false
   */
  app.post('/todos', async (req, res) => {
    // Lógica para crear una nueva tarea
  });
  
  /**
   * @swagger
   * /todos/{id}:
   *   put:
   *     summary: Actualizar una tarea existente
   *     tags: [Todos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID de la tarea a actualizar
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Todo'
   *     responses:
   *       200:
   *         description: Tarea actualizada exitosamente
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   $ref: '#/components/schemas/Todo'
   *                 status:
   *                   type: boolean
   *                   default: true
   *       404:
   *         description: Tarea no encontrada
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   example: Tarea no encontrada
   *                 status:
   *                   type: boolean
   *                   default: false
   *       500:
   *         description: Error del servidor
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                 status:
   *                   type: boolean
   *                   default: false
   */
  app.put('/todos/:id', async (req, res) => {
    // Lógica para actualizar una tarea existente
  });
  
  /**
   * @swagger
   * /todos/{id}:
   *   delete:
   *     summary: Eliminar una tarea por su ID
   *     tags: [Todos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID de la tarea a eliminar
   *     responses:
   *       204:
   *         description: Tarea eliminada exitosamente
   *       404:
   *         description: Tarea no encontrada
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   example: Tarea no encontrada
   *                 status:
   *                   type: boolean
   *                   default: false
   *       500:
   *         description: Error del servidor
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                 status:
   *                   type: boolean
   *                   default: false
   */
  app.delete('/todos/:id', async (req, res) => {
    // Lógica para eliminar una tarea por su ID
  });
  

app.listen(8089, () => {
    console.log('Servidor web iniciado');
});







