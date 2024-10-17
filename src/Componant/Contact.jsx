import React from 'react'
import Map from '../Componant/Map'


export default function Contact() {
  return (
    <div className='my-40' id='Contact'>
      <section className='flex gap-16 justify-center items-center'>
        <div className='bg-slate w-80 h-32 p-6'>
          <h1 className='text-yellow font-main'>Address</h1>
          <div className='flex gap-4 mt-3'>
            <img className='w-5 h-5' src="https://www.svgrepo.com/show/532539/location-pin.svg" alt="" />
            <h2>123 Street, Phayathai Bangkok </h2>
          </div>
        </div>
        <div className='bg-slate w-80 h-32 p-6'>
          <h1 className='text-yellow font-main'>Phone</h1>
          <div className='flex gap-4 mt-3'>
            <img className='w-5 h-5' src="https://www.svgrepo.com/show/535565/phone.svg" alt="" />
            <h2>002 123 456 789</h2>
          </div>
        </div>
        <div className='bg-slate w-80 h-32 p-6'>
          <h1 className='text-yellow font-main'>Email</h1>
          <div className='flex gap-4 mt-3'>
            <img className='w-5 h-5' src="https://www.svgrepo.com/show/435312/email.svg" alt="" />
            <h2>info@example.com</h2>
          </div>
        </div>
      </section>

      <section className=' w-3/4 mx-auto flex my-20 '>
        <div className='bg-slate w-full '>
          <Map />
        </div>

      </section>
    </div>
  )
}
