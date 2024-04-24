import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='white',
    className='',
    ...props
}){
  return (
    <button className={` ${className} ${bgColor} text-${textColor}  text-center  py-2 duration-200 hover: bg-blue-100 rounded-full  `} type={type}
    {...props} >{children}</button>
  )
}

export default Button