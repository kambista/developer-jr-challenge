import ViewTask from "../../components/ViewTask/ViewTask";
import './Todo.css';

function Todo() {
    return (
        <>
            <div className="todo-container">
                <ViewTask title={"Tareas por hacer"} />

                <ViewTask title={"Tareas hechas"} />
            </div>
        </>
    )
}

export default Todo;














