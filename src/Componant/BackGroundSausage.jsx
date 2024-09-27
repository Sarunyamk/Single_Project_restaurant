import React from 'react'
import bgMainVideo from '../assets/BgSausage.mp4'
import bgMainVideo1 from '../assets/bg-opacityMD.mp4'
import bgMainVideo2 from '../assets/bgSausagropacity.mp4'
import steakSpin from '../img/imgMenu/steak1.png'

export default function BackGroundSausage() {
  return (
    <div id='home'>
      <div className='relative'>
        <section  >
            <h1 className='text-shadow text-white text-8xl font-extrabold absolute top-72 left-1/2 transform -translate-x-1/2 z-5'>Let Get IT</h1>
            <h1 className='text-shadow text-white text-8xl font-extrabold absolute top-96 left-1/2 transform -translate-x-1/2 z-5 mt-20'>GermanSausage</h1>
            
        </section>

        <video autoPlay loop muted  className='w-full h-full object-cover inset-0 z-0  '>
                    <source src={bgMainVideo} type="video/mp4"  />
        </video>

        {/* <img
            className='w-full h-[956px] object-cover ' 
            src={bgSteakSet3} alt="" /> */}
        
        </div>
    </div>
  )
}
