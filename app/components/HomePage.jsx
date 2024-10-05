import React from 'react'
import Header from './Header'
import Particles from '@/components/ui/particles'
import { ParticlesDemo } from './Particles'
import Hero from './Hero'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-black'>
        <ParticlesDemo />
        <Hero />
    </div>
  )
}

export default HomePage