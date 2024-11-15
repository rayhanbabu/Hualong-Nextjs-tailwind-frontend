import AboutUs from '@/components/about/About'
import Banner from '@/components/banner/Banner'
import Feature from '@/components/featureProduct/Feature'
import Resources from '@/components/resources/Resources'
import React from 'react'

function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Feature />
      <Resources />
    </div>
  )
}

export default Home
