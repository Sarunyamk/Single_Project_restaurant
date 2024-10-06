import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAdminStore from '../zustand/adminStore'



const intitialState = {
    menuName: '',
    Price: '',
    description: '',
    categoryId: '',
    image: '',
    
  }

export default function CreateMenu() {

    const [form,setForm] = useState({
        menuName: '',
        Price: '',
        description: '',
        categoryId: '',
        image: '',
    })


    const actionCreateMenu = useAdminStore((state)=> state.actionCreateMenu)
    const handleChange = (e) => {
    
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
         
          await actionCreateMenu(form);
          setForm(intitialState);
          
        } catch (err) {
       
          console.error("create Menu failed:", err);
        }
    }

  

      const inputs = [
        { label: 'MenuName', name: 'menuName', type: 'text', placeholder: 'MenuName...' },
        { label: 'Price', name: 'price', type: 'number', placeholder: 'Price...' },
        { label: 'Description', name: 'description', type: 'text', placeholder: 'description...' },
        { label: 'CategoryId', name: 'categoryId', type: 'number', placeholder: 'categoryId...' },
        { label: 'Image', name: 'image', type: 'text', placeholder: 'image...' },
      ]

    
  return (
     <div>
            <Link to='/admin/editmenu'>
                <button className='bg-yellow mt-32 mx-32 px-5 py-3 font-main rounded-lg'>back</button>
            </Link>
            <form onSubmit={handleSubmit} className='bg-red-gradient w-1/3 mx-auto p-6 flex flex-col justify-center items-center gap-4 rounded-lg'>
                <h1 className='font-main text-yellow mt-3'>Create Menu</h1>

                {inputs.map((input, index) => (
                    <div key={index} className='w-full flex flex-col'>
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
                        
                    </div>
                ))}
                <button className='bg-yellow p-4 m-2 font-head rounded-xl text-white'>Confirm</button>
            </form>
        </div>
  )
}
