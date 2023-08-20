import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  return (
    <FontAwesomeIcon icon={props.iconName} style={{color: props.color}}/>
  )
}

export default Icon;