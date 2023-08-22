import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  return (
    <FontAwesomeIcon className="icon" icon={props.iconName} style={{color: props.color, width: '100%', height: '100%'}}/>
  )
}

export default Icon;