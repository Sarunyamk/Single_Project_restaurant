import React, { useState } from 'react'

import useAppStore from '../stores/appStore'
import { useNavigate } from 'react-router-dom'

import ForgetPassword from './ForgetPassword'
import validateLogin from '../Utils/loginValidate'



export default function Login() {


  const [form, setForm] = useState({

    email: '',
    password: ''
  })
  const [formatError, setFormatError] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const actionLogin = useAppStore((state) => state.actionLogin)


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    const error = validateLogin(form)

    if (error) {

      return setFormatError(error)
    }
    const role = await actionLogin(form)

    if (role) {

      roleRedirect(role)
    }
  }

  const roleRedirect = (role) => {

    const checkRole = role.data.user.user.role

    if (checkRole === "ADMIN") {

      navigate('/admin')
    } else {
      navigate('/menu')
    }
  }

  return (
    <div className='bg-red-gradient max-w-md w-full mx-auto my-60 py-4 rounded-md flex flex-col justify-center items-center gap-4'>
      <form onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center gap-4 w-full'>
        <h1 className='font-main text-yellow my-4 '>Login</h1>
        <input name="email" onChange={handleChange} value={form.email}
          className='p-2 outline-none w-2/3 rounded-lg ' type="email" placeholder='Email...' />
        <div className='w-2/3 '>
          {formatError && <p className='text-gray-300 text-xs'>{formatError.email}</p>}
        </div>
        <input name="password" onChange={handleChange} value={form.password}
          className='p-2 outline-none w-2/3 rounded-lg' type="password" placeholder='Password...' />
        <div className='w-2/3 '>
          {formatError && <p className='text-gray-300 text-xs'>{formatError.password}</p>}
        </div>
        <button className='bg-yellow text-white py-4 px-6 font-head  rounded-xl'>Login</button>
      </form>
      <p onClick={() => setIsOpen(!isOpen)} className='text-white cursor-pointer underline hover:text-yellow'>Forget Password ?</p>
      {isOpen && <ForgetPassword setIsOpen={setIsOpen} />}
    </div>
  )
}
