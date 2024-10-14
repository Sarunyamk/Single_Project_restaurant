import React, { useState, useEffect } from 'react'

import useAdminStore from '../zustand/adminStore'
import { getCategoryName } from '../api/admin-api';
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
  const [categoryName, setCategoryName] = useState([])

  useEffect(() => {
    category()
  }, [])

  const category = async () => {
    try {
      const resp = await getCategoryName();
      setCategoryName(resp.data);
      console.log(resp.data)
    } catch (err) {
      console.log(err);
    }
  }


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


  return (
    <div className='w-4/5'>
      <form onSubmit={handleSubmit} className='bg-red-gradient mt-40 w-96  mx-auto p-6 flex flex-col justify-center items-center gap-4 rounded-lg'>
        <h1 className='font-main text-yellow mt-3'>Create Menu</h1>

        <div className='w-full flex flex-col'>
          <div className='flex items-center h-12'>
            <label className='text-yellow font-bold w-1/3 text-right pr-4' >Menu Name :</label>
            <input
              name="menuName" value={form.menuName || ''}
              onChange={handleChange} type="text" placeholder="MenuName..."
              className='p-2 outline-yellow-500 w-2/3 rounded-md' />
          </div>
          <div className='flex items-center h-12'>
            <label className='text-yellow font-bold w-1/3 text-right pr-4' >Price :</label>
            <input
              name="price" value={form.price || ''}
              onChange={handleChange} type="number" placeholder="Price..."
              className='p-2 outline-yellow-500 w-2/3 rounded-md' />
          </div>
          <div className='flex items-center h-12'>
            <label className='text-yellow font-bold w-1/3 text-right pr-4' >Description :</label>
            <input
              name="description" value={form.description || ''}
              onChange={handleChange} type="text" placeholder="Description..."
              className='p-2 outline-yellow-500 w-2/3 rounded-md' />
          </div>
          <div className='flex items-center h-12'>
            <label className='text-yellow font-bold w-1/3 text-right pr-4'>Category :</label>
            <select
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              className='p-2 outline-yellow-500 w-2/3 rounded-md'
            >
              <option value="">Select Category</option>
              {categoryName.map((item) => (
                <option key={item.id} value={item.id}>{item.categoryName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-slate-100 opacity-95 hover:bg-slate-200 min-h-40 rounded-lg relative cursor-pointer" >
          <input type="file" onChange={handleFileChange} className='opacity-0 w-full h-full' />
          {file && <img src={URL.createObjectURL(file)} className='h-60 block mx-auto' />}
          {!file && <FaImage className='absolute w-12 h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 -z-10' />}
        </div>
        <button className='bg-yellow p-4 m-2 font-head rounded-xl text-white'>Confirm</button>

      </form>
    </div>
  )
}
