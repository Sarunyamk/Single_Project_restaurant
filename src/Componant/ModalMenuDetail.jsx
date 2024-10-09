import React, { useState } from 'react'


export default function ModalDetail(props) {

  const { hdlCloseModal, selectedItem } = props
  const [count, setCount] = useState(1)

  const hdlcountIncrement = () => {
    setCount(count + 1)
  }
  const hdlcountDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    } else {
      setCount(1)
    }
  }

  return (
    <div>
      <section className="fixed inset-0  bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className=" relative w-1/2 h-[400px] mx-auto rounded-xl bg-slate-100 flex items-center justify-center z-50">
          <div className='w-1/2 flex justify-center items-center '>
            <img className=' object-cover w-60 h-60 ' src={selectedItem.image} alt="" />
          </div>

          <div className=' w-1/2 text-slate-800 flex flex-col gap-4' key={selectedItem.id}>
            <h1 className='font-main  '>{selectedItem.menuName}</h1>
            <h2 className='font-head'>Price : {selectedItem.price}$</h2>
            <p className='font-second min-w-full'>{selectedItem.description}</p>
            <div className='flex  mx-auto justify-center items-baseline '>
              <button onClick={hdlcountDecrement} className='w-8 h-8 font-head'>-</button>
              <h1 id='quantity' className='font-main w-10 h-10 text-center'>{count}</h1>
              <button onClick={hdlcountIncrement} className='w-8 h-8 font-head'>+</button>
            </div>
            <button className='bg-yellow w-1/3 rounded-lg mx-auto p-2  text-white'>Add to cart</button>
            <p className='font-head '>Total : {count * selectedItem.price}$</p>
            <button onClick={hdlCloseModal} className="absolute top-0 right-0 font-head  w-8 h-8 text-center">
              X
            </button>
          </div>
        </div>

      </section>
    </div>
  )
}
