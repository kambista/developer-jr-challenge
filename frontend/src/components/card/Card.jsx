
import './Card.css'
import Button from '../button/Button'


function Card({title, description}) {
    return (
        <div className="card">
            <div className="card__content">
                <h4>{title}</h4>

                <p className="card__description">{description}</p>
                
                <Button text="Read More" />
            </div>
        </div>
    )
}

export default Card