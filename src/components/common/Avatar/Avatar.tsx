import React from 'react'
import Image from '../Image/Image'
import style from './Avatar.module.css'

interface avatarProps {
    src:string;
    name:string;
}

const Avatar:React.FC<avatarProps> = ({src,name}) => {
  return (
    <div className={style.container}>
        <div>
        <Image className='w-full object-cover h-full' src={src} alt={name}/>
        </div>
    </div>
  )
}

export default Avatar