import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button(props) {
  const Navigate = useNavigate()

  return (
    <>
    <button onClick={() => Navigate(props.navigate)} className='bg-cyan-500 shadow-lg shadow-cyan-500/50 w-28 h-12 rounded-lg text-white uppercase'>{props.ButtonContent}</button>
    </>
  )
}

export default Button
