import React from 'react'

import pizzaMenu3 from '../img/imgMenu/pizza3.png'

export default function OrderCustomerPage() {
  return (
    <div>
      <section className='w-1/2 mx-auto bg-slate my-60 rounded-xl '>

        <div className='bg-red-gradient h-auto flex justify-center items-center p-3 text-white rounded-xl '>
            <h1 className='text-center flex-1 font-main '>Cart</h1>
            <button className='w-20 p-2 rounded-md bg-yellow -ms-16'>Back</button>
        </div>

        <div className='overflow-y-scroll max-h-96'>

            <div className='w-10/12 h-auto mx-auto border-2 rounded-lg border-red my-2  '>
                <div className=' flex p-6 gap-6'>
                    <div className='w-52 h-32 border-2 rounded-lg border-red flex-shrink-0'>
                        <img className='w-full h-full object-contain' src={pizzaMenu3} alt="" />
                    </div>
                    <div className='w-3/6 flex flex-col justify-center gap-4 '>
                        <h1 className='font-main text-yellow'>Menu name</h1>
                        <div className='flex  item-baseline gap-5'>
                            <p className='font-head text-yellow'>Price</p>
                            <p className='font-head text-yellow'>250</p>
                        <div className='flex items-center gap-4'>
                             <button className='w-8 h-8 font-head border border-black rounded-md'>-</button>
                             <h1 className='font-main w-8 h-8 text-center'>1</h1>
                             <button className='w-8 h-8 font-head border border-black rounded-md'>+</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-end items-end  flex-shrink-0'>
                        <img className='w-8 h-8' src="https://www.svgrepo.com/show/502614/delete.svg" alt="" />
                    </div>
                </div>
                
            </div>

            <div className='w-10/12 h-auto mx-auto border-2 rounded-lg border-red my-2  '>
                <div className=' flex p-6 gap-6'>
                    <div className='w-52 h-32 border-2 rounded-lg border-red flex-shrink-0'>
                        <img className='w-full h-full object-contain' src={pizzaMenu3} alt="" />
                    </div>
                    <div className='w-3/6 flex flex-col justify-center gap-4 '>
                        <h1 className='font-main text-yellow'>Menu name</h1>
                        <div className='flex  item-baseline gap-5'>
                            <p className='font-head text-yellow'>Price</p>
                            <p className='font-head text-yellow'>250</p>
                        <div className='flex items-center gap-4'>
                             <button className='w-8 h-8 font-head border border-black rounded-md'>-</button>
                             <h1 className='font-main w-8 h-8 text-center'>1</h1>
                             <button className='w-8 h-8 font-head border border-black rounded-md'>+</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-end items-end  flex-shrink-0'>
                        <img className='w-8 h-8' src="https://www.svgrepo.com/show/502614/delete.svg" alt="" />
                    </div>
                </div>
                
            </div>

            <div className='w-10/12 h-auto mx-auto border-2 rounded-lg border-red my-2  '>
                <div className=' flex p-6 gap-6'>
                    <div className='w-52 h-32 border-2 rounded-lg border-red flex-shrink-0'>
                        <img className='w-full h-full object-contain' src={pizzaMenu3} alt="" />
                    </div>
                    <div className='w-3/6 flex flex-col justify-center gap-4 '>
                        <h1 className='font-main text-yellow'>Menu name</h1>
                        <div className='flex  item-baseline gap-5'>
                            <p className='font-head text-yellow'>Price</p>
                            <p className='font-head text-yellow'>250</p>
                        <div className='flex items-center gap-4'>
                             <button className='w-8 h-8 font-head border border-black rounded-md'>-</button>
                             <h1 className='font-main w-8 h-8 text-center'>1</h1>
                             <button className='w-8 h-8 font-head border border-black rounded-md'>+</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex justify-end items-end  flex-shrink-0'>
                        <img className='w-8 h-8' src="https://www.svgrepo.com/show/502614/delete.svg" alt="" />
                    </div>
                </div>
                
            </div>


            
        </div>

        <div className='bg-red-gradient h-auto flex items-center justify-between p-3 text-white rounded-xl '>
            <button className='font-head p-1 rounded-md bg-yellow w-32 mx-auto'>Check out</button>
            <div className='flex justify-center items-center gap-4 -ms-48'>
                <h1>Total : </h1>
                <h1 className='w-32 p-2 rounded-md bg-white text-red font-head text-center ml-auto'>250</h1>
            </div>
        </div>


      </section>
    </div>
  )
}
