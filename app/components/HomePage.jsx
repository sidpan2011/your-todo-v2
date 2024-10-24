import React from 'react' 
import { ParticlesDemo } from './Particles'
import Hero from './Hero'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='bg-white dark:bg-black'>
        <ParticlesDemo />
        <Hero />
    </div>
  )
}

export default HomePage