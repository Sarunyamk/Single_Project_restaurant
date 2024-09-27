import React from 'react'

import twitterIcon from '../img/imgIcon/twitterIcon.png'
import facebookIcon from '../img/imgIcon/facebookIcon.png'
import youtubeIcon from '../img/imgIcon/youtubeIcon.png'
import igIcon from '../img/imgIcon/igIcon.png'

import locationIcon from '../img/imgIcon/locationIcon.png'
import phoneIcon from '../img/imgIcon/phoneIcon.png'
import emailIcon from '../img/imgIcon/emailIcon.png'


export default function Footer() {
  return (
    <div>
      <footer className='bg-red-gradient  text-white  h-auto '>
      <div className='flex justify-around items-start mx-40 py-10'>
  
            <div className='w-80 h-auto space-y-2'>
                <h1 className='font-main text-yellow  mb-4'>Contact</h1>
                <div className='space-y-2 font-second'>
                    <div className='flex gap-4 items-center'>
                        <img className='w-5 h-5' src={locationIcon} alt="Location" />
                        <h2 className='text-white'>123 Street, New York, USA</h2>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img className='w-5 h-5' src={phoneIcon} alt="Phone" />
                        <h2 className='text-white'>+1 123 456 789</h2>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img className='w-5 h-5' src={emailIcon} alt="Email" />
                        <h2 className='text-white'>info@example.com</h2>
                    </div>
                </div>
                
                <div className='flex gap-3 mt-4'>
                    <a href="#" className='w-10 h-10 rounded-full border border-slate-100 hover:bg-white transition-all duration-300 flex items-center justify-center'>
                        <img className='w-6 h-6' src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="#" className='w-10 h-10 rounded-full border border-slate-100 hover:bg-white transition-all duration-300 flex items-center justify-center'>
                        <img className='w-8 h-8' src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="#" className='w-10 h-10 rounded-full border border-slate-100 hover:bg-white transition-all duration-300 flex items-center justify-center'>
                        <img className='w-6 h-6' src={youtubeIcon} alt="YouTube" />
                    </a>
                    <a href="#" className='w-10 h-10 rounded-full border border-slate-100 hover:bg-white transition-all duration-300 flex items-center justify-center'>
                        <img className='w-6 h-6' src={igIcon} alt="Instagram" />
                    </a>
                </div>
            </div>

            
            <div className='w-80 h-auto space-y-2'>
                <h1 className='font-main text-yellow  mb-4'>Opening</h1>
                <div className='font-second'>
                    <h1 className='text-white'>Monday - Friday</h1>
                    <h2 className='text-white'>10:00 AM - 10:00 PM</h2>
                </div>
                <div className='font-second'>
                    <h1 className='text-white'>Saturday - Sunday</h1>
                    <h2 className='text-white'>12:00 AM - 10:00 PM</h2>
                </div>
            </div>

            
            <div className='w-80 h-auto space-y-2'>
                <h1 className='font-main text-yellow mb-4'>Newsletter</h1>
                <p className='font-second text-white'>Stay updated with our latest news and offers.</p>
                <div className='flex gap-4'>
                    <input className='rounded-xl ps-4 py-1 outline-none border-2 border-yellow-500 w-full' type="text" placeholder='Your Email...' />
                    <button className='bg-yellow text-white px-4 py-1 rounded-xl font-second'>Signup</button>
                </div>
            </div>
        </div>

        {/* <hr className='w-[80%] mx-auto border-yellow' /> */}
    </footer>
      {/* <footer className='bg-slate-800  text-white py-10 h-auto '>
        <div className='grid grid-cols-3 gap-12 mx-28 justify-center items-start p-4 '>
            <div className='grid-cols-3 h-60 space-y-3'>
                <h1 className='text-3xl font-bold text-yellow-500'>Contact </h1>
                <div className='flex flex-col gap-4' >
                    <div className='flex gap-4 '>
                        <img className='w-5 h-5' src={locationIcon} alt="" />
                        <h2>123 Street, New York, USA</h2>
                    </div>
                    <div className='flex gap-4  '>
                        <img className='w-5 h-5' src={phoneIcon} alt="" />
                        <h2>123 Street, New York, USA</h2>
                    </div>
                    <div className='flex gap-4  '>
                        <img className='w-5 h-5' src={emailIcon} alt="" />
                        <h2>123 Street, New York, USA</h2>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-10 h-10 rounded-full border border-slate-100 hover:bg-white transition-all duration-300'>
                            <a className='flex justify-center items-center p-1' href="#">
                                <img className='w-8 h-8' src={twitterIcon} alt="" />
                            </a>
                        </div>
                        <div className='w-10 h-10 rounded-full border border-slate-100 hover:bg-white transition-all duration-300'>
                            <a className='flex justify-center items-center p-1' href="#">
                                <img className='w-8 h-8' src={facebookIcon} alt="" />
                            </a>
                        </div>
                        <div className='w-10 h-10 rounded-full border border-slate-100 hover:bg-white transition-all duration-300'>
                            <a className='flex justify-center items-center p-1' href="#">
                                <img className='w-8 h-8' src={youtubeIcon} alt="" />
                            </a>
                        </div>
                        <div className='w-10 h-10 rounded-full border border-slate-100 hover:bg-white transition-all duration-300'>
                            <a className='flex justify-center items-center p-1' href="#">
                                <img className='w-8 h-8' src={igIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid-cols-3 h-60 space-y-3'>
                <h1 className='text-3xl font-bold text-yellow-500'>Opening</h1>
                <div>
                    <h1>Monday - Friday</h1>
                    <h2>10:00 AM - 10:00 PM</h2>
                </div>
                <div>
                    <h1>Saturday - Sunday</h1>
                    <h2>12:00 AM - 10:00 PM</h2>
                </div>
            </div>
            
            <div className='grid-cols-3  h-60 space-y-3'>
                <h1 className='text-3xl font-bold text-yellow-500'>News Letter</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, fugiat.</p>
                <div className='flex gap-4 '>
                    <input className='rounded-xl ps-4 py-1 outline-none' type="text" placeholder='Your Email...' />
                    <button className='bg-yellow-500 px-2 py-1 rounded-xl'>Signup</button>
                </div>
            </div>

        </div>
        <hr className='w-[80%] mx-auto border-yellow-500' />
    </footer> */}
    </div>
  )
}
