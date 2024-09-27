import React from 'react'

export default function Signup() {
  return (
    <div>
      <div className='bg-red-gradient max-w-md w-full mx-auto my-60  py-4 flex flex-col justify-center items-center gap-4'>
        <h1 className='font-main text-yellow my-4 '>Sign up</h1>
        <div className='flex gap-4'>
            <input className='p-2 outline-none' type="text" placeholder='Firstname...'/>
            <input className='p-2 outline-none' type="text" placeholder='Lastname...'/>
        </div>
        <div className='flex gap-4'>
            <input className='p-2 outline-none' type="email" placeholder='Email...'/>
            <input className='p-2 outline-none' type="tel" placeholder='Phone...'/>
        </div>
        <div className='flex gap-4'>
            <input className='p-2 outline-none' type="password" placeholder='Password...'/>
            <input className='p-2 outline-none' type="password" placeholder='Confirm password...'/>
        </div>
        <div className='flex gap-4 px-10 text-white'>
            <input type="checkbox" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores!</p>
        </div>
        <button className='bg-yellow p-4 font-head rounded-xl text-white'>Sign up</button>
      </div>

      
    </div>
  )
}
