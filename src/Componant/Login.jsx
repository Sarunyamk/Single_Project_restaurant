import React from 'react'

export default function Login() {
  return (
    <div>
      <div className='bg-red-gradient max-w-md w-full mx-auto my-60 py-4 flex flex-col justify-center items-center gap-4'>
        <h1 className='font-main text-yellow my-4 '>Login</h1>
        <input className='p-2 outline-none w-10/12' type="email" placeholder='Put your Email...'/>
        <input className='p-2 outline-none w-10/12' type="password" placeholder='Put your password...'/>
        <div className='flex gap-4 text-white'>
           <input type="checkbox" />
           <p>Forget password</p>
        </div>
        <button className='bg-yellow text-white py-4 px-6 font-head  rounded-xl'>Login</button>
      </div>
    </div>
  )
}
