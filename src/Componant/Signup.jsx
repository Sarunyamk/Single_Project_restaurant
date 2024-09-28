import React ,{useState} from 'react'
import validateRegister from '../Utils/Validate'
import useAppStore from '../zustand/appStore'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


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

  const [form,setForm] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [formatError,setFormatError] = useState({})

  const actionRegister = useAppStore((state)=> state.actionRegister)

  const navigate = useNavigate()

  const handleChange = (e) => {
    
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateRegister(form)
    
    if(error){
      
      return setFormatError(error)
    }
    
    actionRegister(form)     
    navigate('/login')
    setForm(intitialState)   
    setFormatError({})
    //ติดบัค อีเมลซ้ำ แต่ไปต่อได้
  }  

  return (
    <div>
      <form     onSubmit={handleSubmit}
                className='bg-red-gradient  w-1/2 mx-auto mt-60  py-4 flex flex-col justify-center items-center gap-9'>
        <h1 className='font-main text-yellow mt-3 '>Sign up</h1>
        <div className='flex gap-4 w-full justify-center items-center px-8'>
            <div className='w-full h-16'>
              <label className='text-yellow font-bold' htmlFor="firstname">Firstname</label>
              <input  name='firstname' value={form.firstname} onChange={handleChange}
                      className='p-2 outline-yellow-500 w-full rounded-md' type="text" placeholder='Firstname...'/>
              {
                    formatError.firstname && <p className='text-gray-300 text-xs ml-2'>{formatError.firstname}</p>
              }
            </div>
            <div className='w-full h-16'>
              <label className='text-yellow font-bold' htmlFor="lastname">Lastname</label>
              <input  name='lastname' value={form.lastname} onChange={handleChange}
                      className='p-2 outline-yellow-500 w-full rounded-md' type="text" placeholder='Lastname...'/>
              {
                    formatError.lastname && <p className='text-gray-300 text-xs ml-2'>{formatError.lastname}</p>
              }
            </div>
        </div>
        <div className='flex gap-4 w-full justify-center items-center px-8'>
            <div className='w-full h-16'>
              <label className='text-yellow font-bold' htmlFor="address">Address</label>
              <input  name='address' value={form.address} onChange={handleChange}
                      className='p-2 outline-yellow-500 w-full rounded-md' type="text" placeholder='Address...'/>            
              {
                  formatError.address && <p className='text-gray-300 text-xs ml-2'>{formatError.address}</p>
              }
            </div>
        </div>
        <div className='flex gap-4 w-full justify-center items-center px-8 '>
            <div className='w-1/2 h-16'>
              <label className='text-yellow font-bold' htmlFor="email">Email</label>
              <input  name='email' value={form.email} onChange={handleChange}
                      className='p-2 outline-yellow-500 w-full rounded-md' type="email" placeholder='Email...'/>
              {
                  formatError.email && <p className='text-gray-300 text-xs ml-2'>{formatError.email}</p>
              }
            </div>
            <div className='w-1/2 h-16'>
              <label className='text-yellow font-bold' htmlFor="phonenumber">Phonenumber</label>
              <input  name='phonenumber' value={form.phonenumber} onChange={handleChange}
                      className='p-2 outline-yellow-500 w-full rounded-md' type="tel" placeholder='Phonenumber...'/>
              {
                  formatError.phonenumber && <p className='text-gray-300 text-xs ml-2'>{formatError.phonenumber}</p>
              }
            </div>
            
        </div>
        <div className='flex gap-4 w-full justify-center items-center px-8 '>
            <div className='w-1/2 h-16'>
              <label className='text-yellow font-bold' htmlFor="password"> Password</label>
              <input  name='password' value={form.password} onChange={handleChange}
                      className='p-2 outline-yellow-500 w-full rounded-md' type="password" placeholder='Password...'/>
              {
                  formatError.password && <p className='text-gray-300 text-xs ml-2'>{formatError.password}</p>
              }
            </div>
            <div  className='w-1/2 h-16'>
              <label className='text-yellow font-bold' htmlFor="confirmPassword">Confirm Password</label>
              <input  name='confirmPassword' value={form.confirmPassword} onChange={handleChange}
                      className='p-2 outline-yellow-500 w-full rounded-md' type="password" placeholder='Confirm password...'/>
              {
                  formatError.confirmPassword && <p className='text-gray-300 text-xs ml-2'>{formatError.confirmPassword}</p>
              }
            </div>
        </div>
        
        <button className='bg-yellow p-4 font-head rounded-xl text-white'>Sign up</button>
      </form>

      
    </div>
  )
}
