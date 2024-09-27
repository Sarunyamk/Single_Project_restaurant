import React from 'react'

import starRateIcon from '../img/imgIcon/starRateIcon.png';

import burgerPopular from '../img/imgMenu/burger3.png'
import pizzaPopular from '../img/imgMenu/pizza2.png'
import steakSetPopular from '../img/imgMenu/steak2.png'
import steakPopular from '../img/imgMenu/steak4.png'
import spaghettiPopular from '../img/imgMenu/spaghetti1.png'


export default function PopularMenu() {

    const text = "Most Popular Menu";

  return (
    <div>
        
        <div className="flex items-center justify-center ">
            <h1 className='font-title my-32 text-yellow wave-text'>
                {text.split("").map((letter, index) => (
                    <span key={index} className="wave-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                    {letter}
                    </span>
                ))}
            </h1>
        </div>

        <section className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-40'>
            <div className='w-3/4  mx-auto text-center hover:scale-125 duration-500  '>
                <div className='h-1/2'>
                    <img className='h-full w-full object-cover  ' 
                        src={steakSetPopular}/>
                    
                </div>
                <div className='h-1/2 flex flex-col gap-3'>
                    <h1 className='font-main text-yellow'>Menu Name</h1>
                    <p className='px-4 text-red font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sed.</p>
                    <h2 className='font-head text-yellow'>Price</h2>
                    <div className='flex justify-center'>
                        <img className='w-6 h-6' src={starRateIcon} alt="" />
                        <img className='w-6 h-6' src={starRateIcon} alt="" />
                        <img className='w-6 h-6' src={starRateIcon} alt="" />
                        <img className='w-6 h-6' src={starRateIcon} alt="" />
                        <img className='w-6 h-6' src={starRateIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-3/4  mx-auto text-center  hover:scale-125 duration-500'>
                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={pizzaPopular}/>
                    
                </div>
                <div className='h-1/2 flex flex-col gap-3'>
                <h1 className='font-main text-yellow'>Menu Name</h1>
                <p className='px-4 text-red font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sed.</p>
                <h2 className='font-head text-yellow'>Price</h2>
                <div className='flex justify-center'>
                <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                </div>
            </div>
            <div className='w-3/4  mx-auto text-center hover:scale-125 duration-500'>
                <div className='h-1/2'>
                    <img className='h-full w-full object-contain ' 
                        src={steakPopular}/>
                    
                </div>
                <div className='h-1/2 flex flex-col gap-3'>
                <h1 className='font-main text-yellow'>Menu Name</h1>
                <p className='px-4 text-red font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sed.</p>
                <h2 className='font-head text-yellow'>Price</h2>
                <div className='flex justify-center'>
                <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                </div>
            </div>
            <div className='w-3/4  mx-auto text-center hover:scale-125 duration-500'>
                <div className='h-1/2'>
                    <img className='h-full w-full object-cover ' 
                        src={burgerPopular}/>
                    
                </div>
                <div className='h-1/2 flex flex-col gap-3'>
                <h1 className='font-main text-yellow'>Menu Name</h1>
                <p className='px-4 text-red font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sed.</p>
                <h2 className='font-head text-yellow'>Price</h2>
                <div className='flex justify-center'>
                <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                </div>
            </div>
            <div className='w-3/4  mx-auto text-center hover:scale-125 duration-500'>
                <div className='h-1/2'>
                    <img className='h-full w-full object-cover ' 
                        src={spaghettiPopular} />
                    
                </div>
                <div className='h-1/2 flex flex-col gap-3'>
                <h1 className='font-main text-yellow'>Menu Name</h1>
                <p className='px-4 text-red font-second'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sed.</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                </div>
            </div>
            
           
        </section>
    </div>
  )
}
