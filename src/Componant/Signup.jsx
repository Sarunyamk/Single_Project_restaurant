import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import validateRegister from '../Utils/registerValidate'
import useAppStore from '../zustand/appStore'


const intitialState = {
  firstname: '',
  lastname: '',
  phonenumber: '',
  address: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function Signup() {

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [formatError, setFormatError] = useState({})

  const actionRegister = useAppStore((state) => state.actionRegister)


  const navigate = useNavigate()

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateRegister(form)

    if (error) {

      return setFormatError(error)
    }

    try {

      await actionRegister(form);

      navigate('/login');
      setForm(intitialState);
      setFormatError({});

    } catch (err) {

      console.error("Registration failed:", err);
    }
  }

  const inputs = [
    { label: 'Firstname', name: 'firstname', type: 'text', placeholder: 'Firstname...' },
    { label: 'Lastname', name: 'lastname', type: 'text', placeholder: 'Lastname...' },
    { label: 'Address', name: 'address', type: 'text', placeholder: 'Address...' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Email...' },
    { label: 'phone', name: 'phonenumber', type: 'tel', placeholder: 'Phonenumber...' },
    { label: 'Password', name: 'password', type: 'password', placeholder: 'Password...' },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Confirm password...' }
  ];


  return (
    <div>

      <form onSubmit={handleSubmit} className='bg-red-gradient w-1/3 mx-auto my-40 p-6 flex flex-col justify-center items-center gap-4 rounded-lg'>
        <h1 className='font-main text-yellow mt-3'>Sign up</h1>

        {inputs.map((input, index) => (
          <div key={index} className='w-full flex flex-col '>

            <div className='flex items-center h-12'>
              <label className='text-yellow font-bold w-1/3 text-right pr-4' htmlFor={input.name}>
                {input.label} :
              </label>

              <input
                name={input.name}
                value={form[input.name] || ''}
                onChange={handleChange}
                className='p-2 outline-yellow-500 w-2/3 rounded-md'
                type={input.type}
                placeholder={input.placeholder}
              />
            </div>

            <div className='w-2/3 ml-auto text-right'>
              {formatError[input.name] && <p className='text-gray-300 text-xs'>{formatError[input.name]}</p>}
            </div>

          </div>
        ))}

        <button className='bg-yellow p-4 m-2 font-head rounded-xl text-white'>Sign up</button>
      </form>

    </div>
  )
}
