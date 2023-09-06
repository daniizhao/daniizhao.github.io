import './Button.scss';

const Button = (props) => {
  return (
    <button className={`baseStyle ${props.style}`}>
      {props.buttonText}
    </button>
  )
}

export default Button;