
import './Card.css'
import Button from '../button/Button'


function Card({todo, action}) {
    return (
        <div className="card">
            <div className="card__content">
                <h4>{todo.title}</h4>

                <p className="card__description">{todo.description}</p>
                
                {
                    todo.completed ? <Button text="Eliminar" onClick={() => action(todo, "deleted")} /> : <Button text="Completar" onClick={() => action(todo, "completed")} /> 
                }
            </div>
        </div>
    )
}

export default Card