import React, { useState } from 'react'

import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Footer() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    const socialIcons = [
        { icon: <TiSocialTwitter className='w-16 h-16 text-yellow' />, },
        { icon: <FaFacebook className='w-16 h-16 text-yellow' />, },
        { icon: <FaYoutube className='w-16 h-16 text-yellow' />, },
        { icon: <FaInstagram className='w-16 h-16 text-yellow' />, },
    ];

    return (
        <div>
            <footer className='bg-red-gradient  text-white  h-auto'>
                <div className='flex justify-around items-center mx-40 py-10'>

                    <div className='w-80 h-auto space-y-2'>
                        <h1 className='font-main text-yellow  mb-4'>Contact</h1>
                        <div className='space-y-2 font-second'>
                            <div className='flex gap-4 items-center'>
                                <FaLocationDot className='w-5 h-5' />
                                <h2 className='text-white'>123 Street, Phayathai Bangkok</h2>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaPhoneAlt className='w-5 h-5' />
                                <h2 className='text-white'>002 123 456 789</h2>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <MdEmail className='w-5 h-5' />
                                <h2 className='text-white'>info@example.com</h2>
                            </div>
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



                    <div className='relative'>
                        <div className='flex gap-3 mt-4'>
                            {socialIcons.map((item, index) => (
                                <a
                                    key={index}
                                    className={`w-20 h-20 rounded-full border border-slate-100 hover:bg-white transition-all duration-300 flex items-center justify-center social-icon ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    )
}
