import React from 'react'

import bgMainVideo from '../assets/bgMainVideo.mp4'
import steakSpin from '../img/imgMenu/steak1.png'

export default function BackGround() {

  return (
    <div>
      <div className='relative'>
        <section >

          <h1 className='text-white text-8xl font-extrabold absolute top-72 right-60 z-5 '>Let Get IT</h1>
          <h1 className='text-white text-8xl font-extrabold absolute top-96 right-40 z-5'>Salmon Steak</h1>
          <img className='animate-spin absolute top-40 left-60 z-5 ' src={steakSpin} alt="" />
        </section>

        <video autoPlay loop muted className='w-full h-full object-cover inset-0 z-0  '>
          <source src={bgMainVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
