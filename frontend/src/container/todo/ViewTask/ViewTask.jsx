import Card from '../../../components/card/Card';
import './ViewTask.css';
import TodoService from '../../../services/TodoServices';


export default function ViewTask({ title, todos, onRefresh }) {

    const onAction = async (todo, action) => {
        if (action === "deleted") {
            await TodoService.deleteTodoById(todo.id);
            onRefresh();
            
        } else if (action === "completed") {
            await TodoService.updateTodo({completed: 1}, todo.id);
            onRefresh();
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