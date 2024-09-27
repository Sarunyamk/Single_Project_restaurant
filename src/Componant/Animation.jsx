import React from 'react'

import tagOrder from '../img/imgAnimation/pngtree-order-now-label-png-image_6593233_preview_rev_1.png'

const Animation = () => {
  return (
    <div>        
      <div className='train skills-train-wrapper '>
        <img    className='train-cab'
                src="https://www.svgrepo.com/show/61060/train-locomotive-toy.svg" alt="" />

        <img    className='train-box-coach imgTrain'
                src="https://www.svgrepo.com/show/217956/tank-train.svg" alt="" />        
        <img    className='train-box-coach imgTrain'
                src="https://www.svgrepo.com/show/217956/tank-train.svg" alt="" />        
        
        <img    className='train-box-coach imgTrain'
                src={tagOrder} alt="" />        

      </div>
    </div>
  )
}

export default Animation
