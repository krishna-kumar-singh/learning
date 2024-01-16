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
    <button className={` ${className} ${textColor} px-6 py-2 duration-200 hover: bg-blue-100 rounded-full  `} type={type}
    {...props} >{children}</button>
  )
}

export default Button