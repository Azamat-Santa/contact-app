import React from 'react'
import './index.css'
const Button = ({text , formButton}) => {
  return (
      <div className='wrapper-button'>
        <button type={formButton && "submit"} className={formButton ? 'buttonCart button-form' : 'buttonCart'}>{text}</button>
      </div>
  )
}

export default Button