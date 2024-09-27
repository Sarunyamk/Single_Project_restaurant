import React from 'react'

import doubleQuoteTop from '../img/imgIcon/doubleQuoteTop.png'
import doubleQuoteBottom from '../img/imgIcon/doubleQuoteBottom.png'

export default function OurClientComment() {

    const text = "Our Client Comment";

  return (
    <div className=' text-black my-40'>
        
        <div className="flex items-center justify-center ">
            <h1 className='font-title my-32 text-yellow wave-text'>
                {text.split("").map((letter, index) => (
                    <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                    {letter}
                    </span>
                ))}
            </h1>
        </div>

        <div>
            <img className='w-20 h-20 mx-32' 
                src={doubleQuoteTop}/>
        </div>

        <section >
        <div className='grid grid-cols-5 gap-8 mx-32 my-10 '>
        <div className='border border-red bg-slate'>
            <div className='h-1/2 flex w-full'>
                <div className='w-20 h-20 rounded-full overflow-hidden m-2'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
                </div>
                <div  className='flex justify-start items-center'>
                <h1 className='font-head text-yellow'>Jenny Black</h1>
                </div>
            </div>
            <p className='h-1/2 w-full p-4 font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus.</p>
        </div>
        <div className='border border-red bg-slate'>
            <div className='h-1/2 flex w-full'>
                <div className='w-20 h-20 rounded-full overflow-hidden m-2'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
                </div>
                <div  className='flex justify-start items-center'>
                <h1 className='font-head text-yellow'>Jenny Black</h1>
                </div>
            </div>
            <p className='h-1/2 w-full p-4 font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus.</p>
        </div>
        <div className='border border-red bg-slate'>
            <div className='h-1/2 flex w-full'>
                <div className='w-20 h-20 rounded-full overflow-hidden m-2'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
                </div>
                <div  className='flex justify-start items-center'>
                <h1 className='font-head text-yellow'>Jenny Black</h1>
                </div>
            </div>
            <p className='h-1/2 w-full p-4 font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus.</p>
        </div>
        <div className='border border-red bg-slate'>
            <div className='h-1/2 flex w-full'>
                <div className='w-20 h-20 rounded-full overflow-hidden m-2'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
                </div>
                <div  className='flex justify-start items-center'>
                <h1 className='font-head text-yellow'>Jenny Black</h1>
                </div>
            </div>
            <p className='h-1/2 w-full p-4 font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus.</p>
        </div>
        <div className='border border-red bg-slate'>
            <div className='h-1/2 flex w-full'>
                <div className='w-20 h-20 rounded-full overflow-hidden m-2'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
                </div>
                <div  className='flex justify-start items-center'>
                <h1 className='font-head text-yellow'>Jenny Black</h1>
                </div>
            </div>
            <p className='h-1/2 w-full p-4 font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus.</p>
        </div>
        <div className='border border-red bg-slate'>
            <div className='h-1/2 flex w-full'>
                <div className='w-20 h-20 rounded-full overflow-hidden m-2'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
                </div>
                <div  className='flex justify-start items-center'>
                <h1 className='font-head text-yellow'>Jenny Black</h1>
                </div>
            </div>
            <p className='h-1/2 w-full p-4 font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus.</p>
        </div>
        <div className='border border-red bg-slate'>
            <div className='h-1/2 flex w-full'>
                <div className='w-20 h-20 rounded-full overflow-hidden m-2'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
                </div>
                <div  className='flex justify-start items-center'>
                <h1 className='font-head text-yellow'>Jenny Black</h1>
                </div>
            </div>
            <p className='h-1/2 w-full p-4 font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus.</p>
        </div>
        <div className='border border-red bg-slate'>
            <div className='h-1/2 flex w-full'>
                <div className='w-20 h-20 rounded-full overflow-hidden m-2'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" alt="" />
                </div>
                <div  className='flex justify-start items-center'>
                <h1 className='font-head text-yellow'>Jenny Black</h1>
                </div>
            </div>
            <p className='h-1/2 w-full p-4 font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus.</p>
        </div>
        
        
        
        </div>        
        </section>
        <div>
            <img className='w-20 h-20 mx-32 float-end ' 
                src={doubleQuoteBottom} alt="" />
        </div>
    </div>
  )
}
