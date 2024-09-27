import React from 'react'

import Menu from '../Componant/Menu'
import Footer from '../Componant/Footer'
import BackGround from './../Componant/BackGround';
import CardSelectCategory from '../Componant/CardSelectCategory';
import Paginate from './../Componant/Paginate';

export default function MenuPage() {
  return (
  
     <div>
      <BackGround/>
      <CardSelectCategory/>
      <Paginate/>
      <Menu/>
      
    </div>
   
  )
}
