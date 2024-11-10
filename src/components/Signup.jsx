import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import validateRegister from '../Utils/registerValidate'
import useAppStore from '../stores/appStore'

import { useTranslation } from 'react-i18next';



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

  const { t } = useTranslation();


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
    { label: t('signup.firstname'), name: 'firstname', type: 'text', placeholder: t('signup.firstnamePlaceholder') },
    { label: t('signup.lastname'), name: 'lastname', type: 'text', placeholder: t('signup.lastnamePlaceholder') },
    { label: t('signup.address'), name: 'address', type: 'text', placeholder: t('signup.addressPlaceholder') },
    { label: t('signup.email'), name: 'email', type: 'email', placeholder: t('signup.emailPlaceholder') },
    { label: t('signup.phonenumber'), name: 'phonenumber', type: 'tel', placeholder: t('signup.phonenumberPlaceholder') },
    { label: t('signup.password'), name: 'password', type: 'password', placeholder: t('signup.passwordPlaceholder') },
    { label: t('signup.confirmPassword'), name: 'confirmPassword', type: 'password', placeholder: t('signup.confirmPasswordPlaceholder') }

  ];


  return (
    <div className='p-4 sm:p-6 md:p-10 mt-10'>
      <form
        onSubmit={handleSubmit}
        className='bg-red-gradient w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto my-20 p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center gap-4 rounded-lg'>

        <h1 className='font-main text-yellow mt-3 text-lg sm:text-xl md:text-2xl'>{t('signup.title')}</h1>

        {inputs.map((input, index) => (
          <div key={index} className='w-full flex flex-col'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center h-auto sm:h-12'>
              <label
                className='text-yellow font-bold w-full sm:w-1/3 text-left sm:text-right pr-0 sm:pr-4 mb-2 sm:mb-0'
                htmlFor={input.name}>
                {input.label} :
              </label>
              <input
                name={input.name}
                value={form[input.name] || ''}
                onChange={handleChange}
                className='p-2 outline-yellow-500 w-full sm:w-2/3 rounded-md'
                type={input.type}
                placeholder={input.placeholder}
              />
            </div>
            <div className='w-full sm:w-2/3 ml-0 sm:ml-auto text-left sm:text-right'>
              {formatError[input.name] && <p className='text-gray-300 text-xs'>{formatError[input.name]}</p>}
            </div>
          </div>
        ))}

        <button className='bg-yellow p-2 sm:p-4 m-2 font-head rounded-xl text-white text-sm sm:text-base'>
          {t('signup.submit')}
        </button>
      </form>
    </div>

  )
}
