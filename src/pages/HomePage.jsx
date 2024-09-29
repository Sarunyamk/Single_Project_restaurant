import React from 'react'
import InfoMore from '../Componant/InfoMore';
import About from '../Componant/About';
import PopularMenu from '../Componant/PopularMenu';
import OurClientComment from '../Componant/ClientComment';
import BackGroundSausage from '../Componant/BackGroundSausage';
import ScrollText from '../Componant/ScrollText';




export default function HomePage() {
  return (
    <div>
     <BackGroundSausage/>   
     <ScrollText/>
     <InfoMore/>
     <About/>  
     <PopularMenu/> 
     <OurClientComment/>      
    </div>
  )
}
