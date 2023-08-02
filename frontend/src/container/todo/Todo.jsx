import ViewTask from './ViewTask/ViewTask';
import './Todo.css';
import TodoService from '../../services/TodoServices';
import { useEffect, useState } from 'react';


function Todo() {
    const [todosCompleted, setTodosCompleted] = useState(null); 
    const [todosNotCompleted, setTodosNotCompleted   ] = useState(null); 


    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = async () => {
        const todos = await TodoService.getTodos();
        const todosCompleted = todos.data.filter((todo) => todo.completed === 1);
        const todosNotCompleted = todos.data.filter((todo) => todo.completed === 0);
        setTodosCompleted(todosCompleted);
        setTodosNotCompleted(todosNotCompleted);
    }

    const onRefresh = () => {
        getTodos();
    }
    
    return (
        <>
            <div className="todo-container">
                {
                    todosCompleted && todosNotCompleted && (
                       <>
                        <ViewTask title={"Tareas por hacer"} todos={todosNotCompleted} onRefresh={onRefresh}/>
                        <ViewTask title={"Tareas hechas"} todos={todosCompleted} onRefresh={onRefresh}/>
                       </>
                    )
                }
            </div>
        </>
    )
}

export default Todo;














