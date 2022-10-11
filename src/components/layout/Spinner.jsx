import React from 'react'
import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 m-20'>
        <img src={spinner} alt="Loading..." width={180} className='text-center' />
    </div>
  )
}

export default Spinner