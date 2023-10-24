import React from 'react'
import { useSelector } from 'react-redux'
function Navbar() {
    const { amount } = useSelector((state) => state.basket)
  return (
    <div className='flex justify-between py-7'>
        <h1 className=' font-medium hover:text-red-400 cursor-pointer'>home</h1>
        <h1 className='font-medium'>basket 
        <span className='bg-red-500 text-sm text-white py-1 px-1 rounded-full self-start'>{amount}</span></h1>
    </div>
  )
}

export default Navbar