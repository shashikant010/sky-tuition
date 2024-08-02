import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full bg-black h-20 p-4 text-white text-2xl flex justify-between items-center'>
        <h1>Sky Tution</h1>
        <nav className='flex justify-center items-center gap-3'>
            <h1>Home</h1>
            <h1>Batches</h1>
            <h1>About</h1>
          
        </nav>
    </div>
  )
}
