import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  return (
    <FontAwesomeIcon className={`icon ${props.animation}`} icon={props.iconName} style={{color: props.color ?? 'var(--primary)', width: '100%', height: '100%'}} />
  )
}

export default Icon;