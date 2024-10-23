import React from 'react'
import InfoMore from '../components/InfoMore';
import About from '../components/About';
import PopularMenu from '../components/PopularMenu';
import BackGroundSausage from '../components/BackGroundSausage';
import ScrollText from '../components/ScrollText';
import Comment from '../components/Comment';



export default function HomePage() {
  return (
    <div>
      <BackGroundSausage />
      <ScrollText />
      <InfoMore />
      <About />
      <PopularMenu />
      <Comment />
    </div>
  )
}
