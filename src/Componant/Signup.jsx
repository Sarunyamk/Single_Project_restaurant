import React ,{useState} from 'react'
import validateRegister from '../Utils/Validate'
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

    actionRegister(value)
    setForm(intitialState)
    setFormatError({})
    
  }
  

  return (
    <div>
      <form     onSubmit={handleSubmit}
                className='bg-red-gradient  w-1/2 mx-auto mt-60  py-4 flex flex-col justify-center items-center gap-8'>
        <h1 className='font-main text-yellow my-4 '>Sign up</h1>
        <div className='flex gap-4 w-3/4 justify-center items-center '>
            <input  name='firstname' value={form.firstname} onChange={handleChange}
                    className='p-2 outline-none w-full' type="text" placeholder='Firstname...'/>
            <input  name='lastname' value={form.lastname} onChange={handleChange}
                    className='p-2 outline-none w-full' type="text" placeholder='Lastname...'/>
        </div>
        <div className='flex gap-4 w-3/4 justify-center items-center'>
            <input  name='address' value={form.address} onChange={handleChange}
                    className='p-2 outline-none w-full' type="text" placeholder='Address...'/>            
        </div>
        <div className='flex gap-4 w-3/4 justify-center items-center'>
            <input  name='email' value={form.email} onChange={handleChange}
                    className='p-2 outline-none w-full' type="email" placeholder='Email...'/>
            {
                formatError.email && <p className='text-red-500 text-xs ml-2'>{formatError.email}</p>
            }
            <input  name='phonenumber' value={form.phonenumber} onChange={handleChange}
                    className='p-2 outline-none w-full' type="tel" placeholder='Phonenumber...'/>
            {
                formatError.phonenumber && <p className='text-red-500 text-xs ml-2'>{formatError.phonenumber}</p>
            }
        </div>
        <div className='flex gap-4 w-3/4 justify-center items-center '>
            <input  name='password' value={form.password} onChange={handleChange}
                    className='p-2 outline-none w-full' type="password" placeholder='Password...'/>
            <input  name='confirmPassword' value={form.confirmPassword} onChange={handleChange}
                    className='p-2 outline-none w-full' type="password" placeholder='Confirm password...'/>
        </div>
        
        <button className='bg-yellow p-4 font-head rounded-xl text-white'>Sign up</button>
      </form>

      
    </div>
  )
}
