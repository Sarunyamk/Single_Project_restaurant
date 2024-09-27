import React from 'react'

import pizzaMenu3 from '../img/imgMenu/pizza3.png'


export default function ModalDetail() {
  return (
    <div>
      <section className='relative mx-auto w-2/3 h-96 flex justify-center my-40  p-6 bg-slate-50 '>
        <div className='w-1/2 flex justify-center items-center'>
            <img className=' object-cover ' src={pizzaMenu3} alt="" />
        </div>
        <div className=' w-1/2 text-slate-800 flex flex-col gap-4'>
            <h1 className='font-main text-yellow '>Menu name</h1>
            <h2 className='font-head text-yellow'>Price</h2>
            <p className='font-second text-red'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam explicabo sequi labore, temporibus corporis, incidunt sed optio sit laboriosam ea quisquam? Error cumque velit ab? Aliquam facere placeat quos est itaque. Praesentium error mollitia nihil ad velit delectus reprehenderit officiis?</p>
            <div className='flex  mx-auto justify-center items-baseline text-red'>
                <button className='w-8 h-8 font-head'>-</button>
                <h1 className='font-main w-10 h-10 text-center'>1</h1>
                <button className='w-8 h-8 font-head'>+</button>
            </div>
            <button className='bg-red-gradient w-1/3 rounded-lg mx-auto p-2  text-white'>Add to cart</button>
            <h1 className='absolute top-0 right-0 font-head text-red w-8 h-8 text-center'>X</h1>
        </div>
        
      </section>
    </div>
  )
}
