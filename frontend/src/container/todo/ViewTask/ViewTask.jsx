import Card from '../../../components/card/Card';
import './ViewTask.css';
import TodoService from '../../../services/TodoServices';
import { toast } from 'react-toastify';


export default function ViewTask({ title, todos, onRefresh }) {
    const notify = () => toast("Tarea completada con exito");
    const notifyDelete = () => toast("Tarea eliminada con exito");

    const onAction = async (todo, action) => {
        if (action === "deleted") {
            await TodoService.deleteTodoById(todo.id);
            onRefresh();
            notifyDelete();
            
        } else if (action === "completed") {
            await TodoService.updateTodo({completed: 1}, todo.id);
            onRefresh();
            notify();
        }
    }
    
    return (
        <div className="view-task">
            {title}
            {
                todos && todos.map((todo) => {
                    return (
                        <Card key={todo.id} todo={todo} action={onAction} />
                    )
                }   
                )
            }
        </div>
    )

}