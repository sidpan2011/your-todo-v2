import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import { BentoDemo } from './BentoFeatureCard'

const Hero = () => {
  return (
    <div className='min-h-screen'>
      <Title title={"Organize Work, Automate Tasks, Achieve More"}/>
      <Subtitle text={"Smart automation meets intuitive organization. Do more with Taskly."} />
      <div className='my-8 w-[60vw] mx-auto'>
        <BentoDemo />
      </div>
    </div>
  )
}

export default Hero