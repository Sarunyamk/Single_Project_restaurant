import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import bgMainVideo from '../assets/BgSausage.mp4'

export default function BackGroundSausage() {
  return (
    <div id='home' className='mt-20'>
      <div className='relative'>
        <section  >
          <h1 className=' hidden md:block text-shadow text-white text-center font-extrabold  absolute top-72 left-1/2 transform -translate-x-1/2 z-5'>

            <TypeAnimation
              sequence={[
                'Welcome to  \n M&M Restaurant!',
                1000,
                'Where Every Bite  \n is a Delight!',
                2000,
                'Fresh Ingredients \n Authentic  \n Flavors.',
                2000
              ]}
              cursor={true}
              deletionSpeed={200}
              repeat={Infinity}
              style={{ fontSize: '80px', whiteSpace: 'pre-line' }}
            />

          </h1>
        </section>

        <video autoPlay loop muted className='w-full h-full object-cover inset-0 z-0  '>
          <source src={bgMainVideo} type="video/mp4" />
        </video>


      </div>
    </div>


  )
}
