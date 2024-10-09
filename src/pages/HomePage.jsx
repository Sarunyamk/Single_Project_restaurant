import React from 'react'
import InfoMore from '../Componant/InfoMore';
import About from '../Componant/About';
import PopularMenu from '../Componant/PopularMenu';
import BackGroundSausage from '../Componant/BackGroundSausage';
import ScrollText from '../Componant/ScrollText';
import Comment from '../Componant/Comment';
import TextVoice from '../Componant/TextVoice';


export default function HomePage() {
  return (
    <div>
      <BackGroundSausage />
      <ScrollText />
      <TextVoice />
      <InfoMore />
      <About />
      <PopularMenu />
      <Comment />
    </div>
  )
}
