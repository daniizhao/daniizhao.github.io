import './Button.scss';

const Button = (props) => {
  return (
    <button className={`baseStyle ${props.style}`} onClick={props.onClick}>
      {props.buttonText}
    </button>
  )
}

export default Button;