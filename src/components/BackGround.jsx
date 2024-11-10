import React from 'react'

import bgMainVideo from '../assets/bgMainVideo.mp4'
import steakSpin from '../img/imgMenu/steak1.png'

export default function BackGround() {

  return (
    <div>
      <div className='relative hidden md:block'>
        {/* Section will be hidden on small screens */}
        <section className="hidden md:block">
          <h1 className='text-white text-4xl lg:text-8xl font-extrabold absolute top-36 lg:top-72 right-20 lg:right-80 z-5'>Let Get IT</h1>
          <h1 className='text-white text-4xl lg:text-8xl font-extrabold absolute top-48 lg:top-96 right-10 lg:right-60 z-5'>Special Steak</h1>
          <img className='animate-spin absolute top-20 lg:top-40 left-10 lg:left-40 z-5' src={steakSpin} alt="Steak" />
        </section>

        <video autoPlay loop muted className='w-full h-full object-cover inset-0 z-0'>
          <source src={bgMainVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
