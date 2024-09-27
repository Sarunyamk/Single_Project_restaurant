import React from 'react'

import starRateIcon from '../img/imgIcon/starRateIcon.png';

import burgerMenu1 from '../img/imgMenu/burger1.png'
import burgerMenu2 from '../img/imgMenu/burger2.png'
import burgerMenu3 from '../img/imgMenu/burger3.png'
import burgerMenu4 from '../img/imgMenu/burger4.png'

import pizzaMenu1 from '../img/imgMenu/pizza1.png'
import pizzaMenu2 from '../img/imgMenu/pizza2.png'
import pizzaMenu3 from '../img/imgMenu/pizza3.png'

import steakMenu1 from '../img/imgMenu/steak1.png'
import steakMenu2 from '../img/imgMenu/steak2.png'
import steakMenu3 from '../img/imgMenu/steak3.png'
import steakMenu4 from '../img/imgMenu/steak4.png'
import steakMenu5 from '../img/imgMenu/steak5.png'

import spaghettiMenu1 from '../img/imgMenu/spaghetti1.png'
import spaghettiMenu2 from '../img/imgMenu/spaghetti2.png'

import toastSandwichMenu1 from '../img/imgMenu/toastSandwich1.png'

import chickenFrieMenu1 from '../img/imgMenu/chickenFrie1.png'

import frenchFrieMenu1 from '../img/imgMenu/frenchFries1.png'

import saladMenu1 from '../img/imgMenu/salad1.png'
import saladMenu2 from '../img/imgMenu/salad2.png'
import saladMenu3 from '../img/imgMenu/salad3.png'




export default function Menu() {
  return (
    <div id='menu' className='my-40'>

      <div className='flex justify-center items-center gap-8'>
        <input type="text" placeholder='Search ....'
          className='p-3 border-yellow border-2 rounded-md outline-red-900  my-8 w-80'/>
          <button className='bg-yellow py-3 px-4 rounded-xl text-white font-head'>Search</button>
      </div>

      <section className='grid grid-cols-4 gap-6 mx-40'>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={burgerMenu1}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>DoubleMax Burger</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={burgerMenu2}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Boom Burger</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-contain' 
                        src={burgerMenu3}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Wagyu Burger</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-contain' 
                        src={burgerMenu4}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Croff Burger</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={pizzaMenu1}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Italian Pizza</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover object-bottom' 
                        src={pizzaMenu2}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Pepporoni Pizza</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover ' 
                        src={pizzaMenu3}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Bazil Pizza</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={steakMenu2}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Combo Steak</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={steakMenu1}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>T-Bone Steak</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-contain' 
                        src={steakMenu4}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Wagyu Steak</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-contain' 
                        src={steakMenu5}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Salmon Steak</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={spaghettiMenu1}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Meat Spaghetti</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={spaghettiMenu2}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Pork Spaghetti</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={toastSandwichMenu1}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Toast Sandwich</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={chickenFrieMenu1}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Chicken Fries</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={frenchFrieMenu1}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>French Fries</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>
        
        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={saladMenu1}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Vegan Salad</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-cover' 
                        src={saladMenu2}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Fruit Salad</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-red-gradient text-white w-1/2 rounded-lg mx-auto p-2 mt-2 '>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>

        <div className='h-[500px] text-center border-2 border-red'>

                <div className='h-1/2'>
                    <img className='h-full w-full object-contain' 
                        src={saladMenu3}/>
                </div>
                <div className='h-1/2 flex flex-col gap-2'>
                <h1 className='font-head text-yellow '>Mixed Salad</h1>
                <p className='px-4 text-red font-second'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, nam</p>
                <h2 className='font-head text-yellow'>Price$$</h2>
                <div className='flex justify-center'>
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                    <img className='w-6 h-6' src={starRateIcon} alt="" />
                </div>
                <div className='bg-yellow text-white w-1/2 rounded-lg mx-auto p-2 mt-2 shadow-lg hover:scale-105 transition duration-300'>
                   <a href="#">Order Now</a>
                </div>
                </div>

        </div>
        

      </section>
    </div>
  )
}
