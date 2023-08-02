import './Button.css';

function Button({ text, onClick }) {
    return (
       <>
         <button href="#0" onClick={onClick} className="card__btn cd-btn cd-btn--primary">{text}</button>
       </>
    )
}

export default Button;