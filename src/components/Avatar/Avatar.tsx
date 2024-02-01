import styles from './Avatar.module.css'

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar (props : AvatarProps) {
  // Destruturando props
  // const {src, hasBorder = true} = props;
  
  return (
    <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} 
          src={props.src} 
          alt="" 
    />
  )
}