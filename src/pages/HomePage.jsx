import React from 'react'
import InfoMore from '../Componant/InfoMore';
import About from '../Componant/About';
import PopularMenu from '../Componant/PopularMenu';
import OurClientComment from '../Componant/ClientComment';
import Footer from '../Componant/Footer';
import BackGround from '../Componant/BackGround';
import BackGroundSausage from '../Componant/BackGroundSausage';




export default function HomePage() {
  return (
    <div>
     <BackGroundSausage/>    
     <InfoMore/>
     <About/>  
     <PopularMenu/> 
     <OurClientComment/>  
     {/* <Footer/>    */}
    </div>
  )
}
