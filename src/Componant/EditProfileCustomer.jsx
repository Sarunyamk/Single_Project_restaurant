import React from 'react'

export default function EditProfileCustomer() {
  return (
    <div>
      <div className='bg-red-gradient max-w-md w-full mx-auto my-60 py-4 flex flex-col justify-center items-center gap-4 text-white'>
        <h1 className='font-main text-yellow my-4 '>Edit Profile</h1>

        <div className='space-y-4 w-full '>
            <div className='flex flex-row gap-4 justify-start items-center'>
                <p className='w-32 text-right'>Firstname :</p>
                <input className='p-2 border rounded-md outline-none ' type="text" placeholder='firstname...' />
            </div>
            <div className='flex flex-row gap-4 justify-start items-center'>
                <p className='w-32 text-right'>Phone :</p>
                <input className='p-2 border rounded-md outline-none ' type="text" placeholder='phone number...' />
            </div>
            <div className='flex flex-row gap-4 justify-start items-center'>
                <p className='w-32 text-right'>Address :</p>
                <input className='p-2 border rounded-md outline-none' type="text" placeholder=' address...' />
            </div>
            <div className='flex flex-row gap-4 justify-start items-center'>
                <p className='w-32 text-right'>Email :</p>
                <input className='p-2 border rounded-md outline-none' type="email" placeholder='email...' />
            </div>
            <div className='flex flex-row gap-4 justify-start items-center'>
                <p className='w-32 text-right'>Password :</p>
                <input className='p-2 border rounded-md outline-none ' type="password" placeholder='password...' />
            </div>
        </div>
        
        <div className='flex gap-4 text-white'>
           <input type="checkbox" />
           <p>Forget password</p>
        </div>
        <button className='bg-yellow text-white py-4 px-6 font-head  rounded-xl'>Confirm</button>
      </div>
    </div>
  )
}

