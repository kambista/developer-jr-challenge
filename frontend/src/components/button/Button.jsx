import './Button.css';

function Button({ text }) {
    return (
       <>
        <footer>
         <a href="#0" className="card__btn cd-btn cd-btn--primary">{text}</a>
        </footer>
       </>
    )
}

export default Button;