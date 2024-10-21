import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import bgMainVideo from '../assets/BgSausage.mp4'

export default function BackGroundSausage() {
  return (
    // <div id='home'>
    //   <div className='relative'>
    //     <section  >
    //       <h1 className='text-shadow text-white text-center font-extrabold  absolute top-72 left-1/2 transform -translate-x-1/2 z-5'>

    //         <TypeAnimation
    //           sequence={[
    //             'Welcome to  \n M&M Restaurant!',
    //             1000,
    //             'Where Every Bite  \n is a Delight!',
    //             2000,
    //             'Fresh Ingredients \n Authentic  \n Flavors.',
    //             2000
    //           ]}
    //           cursor={true}
    //           deletionSpeed={200}
    //           repeat={Infinity}
    //           style={{ fontSize: '80px', whiteSpace: 'pre-line' }}
    //         />

    //       </h1>
    //     </section>

    //     <video autoPlay loop muted className='w-full h-full object-cover inset-0 z-0  '>
    //       <source src={bgMainVideo} type="video/mp4" />
    //     </video>


    //   </div>
    // </div>

    <div id='home'>
      <div className='relative'>
        <section>
          <h1 className='text-shadow text-white text-center font-extrabold absolute top-1/3 left-1/2 transform -translate-x-1/2 z-5'>
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
              style={{ whiteSpace: 'pre-line' }}
              // ปรับฟอนต์ให้ responsive
              className='text-4xl md:text-6xl lg:text-8xl'
            />
          </h1>
        </section>

        {/* วิดีโอ Background */}
        <video autoPlay loop muted className='w-full h-screen object-cover inset-0 z-0'>
          <source src={bgMainVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
