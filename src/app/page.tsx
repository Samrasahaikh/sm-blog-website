import Hero from '@/components/hero/hero'
import { CarouselPlugin } from '@/components/hero/hero-slider'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <CarouselPlugin/>
      <Hero/>
    </div>
  )
}

export default HomePage