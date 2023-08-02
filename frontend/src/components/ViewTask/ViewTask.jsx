import Card from '../card/Card';
import './ViewTask.css';

export default function ViewTask({ title }) {

    

    return (
        <div className="view-task">
            {title}
            <Card />
            <Card />
        </div>
    )

}