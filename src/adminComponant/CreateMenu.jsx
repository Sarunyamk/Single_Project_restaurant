import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAdminStore from '../zustand/adminStore'
import { FaImage } from "react-icons/fa6";



const intitialState = {
  menuName: '',
  price: '',
  description: '',
  categoryId: '',


}

export default function CreateMenu() {

  const [form, setForm] = useState({
    menuName: '',
    price: '',
    description: '',
    categoryId: '',

  })


  const actionCreateMenu = useAdminStore((state) => state.actionCreateMenu)
  const [file, setFile] = useState(null)
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setForm({ ...form, image: selectedFile });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let key in form) {
        console.log(key)
        formData.append(key, form[key])
      }
      await actionCreateMenu(formData);
      setForm(intitialState);
      setFile(null);
    } catch (err) {
      console.error("Create Menu failed:", err);
    }
  };



  const inputs = [
    { label: 'MenuName', name: 'menuName', type: 'text', placeholder: 'MenuName...' },
    { label: 'Price', name: 'price', type: 'number', placeholder: 'Price...' },
    { label: 'Description', name: 'description', type: 'text', placeholder: 'description...' },
    { label: 'CategoryId', name: 'categoryId', type: 'number', placeholder: 'categoryId...' },

  ]


  return (
    <div>
      <Link to='/admin/editmenu'>
        <button className='bg-yellow mt-32 mx-32 px-5 py-3 font-main rounded-lg'>Back</button>
      </Link>
      <form onSubmit={handleSubmit} className='bg-red-gradient w-1/3 mx-auto p-6 flex flex-col justify-center items-center gap-4 rounded-lg'>
        <h1 className='font-main text-yellow mt-3'>Create Menu</h1>

        {inputs.map((input, index) => (
          <div key={index} className='w-full flex flex-col'>
            <div className='flex items-center h-12'>
              <label className='text-yellow font-bold w-1/3 text-right pr-4' htmlFor={input.name}>
                {input.label}:
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
        <div className="bg-slate-100 opacity-95 hover:bg-slate-200 min-h-40 rounded-lg relative cursor-pointer" >
          <input type="file" onChange={handleFileChange} className='opacity-0 w-full h-full' />
          <img src={file ? URL.createObjectURL(file) : ''} className='h-60 block mx-auto' />
          <FaImage className='absolute w-12 h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 -z-10' />
        </div>
        <button className='bg-yellow p-4 m-2 font-head rounded-xl text-white'>Confirm</button>
      </form>
    </div>
  )
}
