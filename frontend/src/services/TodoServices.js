import api from "./ApiBase.js";



const createTodo = (data) => {
    const URL = "todos";
  
    return api.post(URL, data).then((response) => response?.data);
  };
  
const updateTodo = (data, id) => {
  const URL = "todos/"+id;

  return api.put(URL, data).then((response) => response.data);
};

const getTodos = () => {
  const URL = "todos";

  const response = api
    .get(URL)
    .then((resolve) => resolve.data);

  return response;
};

const getTodoById = (id) => {
  const URL = "todos/"+id;

  const response = api
    .get(URL)
    .then((resolve) => resolve.data);

  return response;
};

const deleteTodoById = (id) => {
  const URL = "todos/"+id;

  return api.delete(URL, id).then((response) => response.data);
};

  
  
const TodoService = {
  createTodo,
  updateTodo,
  getTodos,
  getTodoById,
  deleteTodoById,
};

export default TodoService;
























