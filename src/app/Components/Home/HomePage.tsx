import React from 'react'
import HomeBanner from './HomeBanner'
import BottomHomeBanner from './BottomHomeBanner'
import HomeAbout from './HomeAbout'
import HomeSolutionCarousel from './HomeSolutionCarousel'
import HomeTechWeUsed from './HomeTechWeUsed'
// import HomeFreeAnalysis from './HomeFreeAnalysis'
// import HomeTestimonials from './HomeTestimonials'
import HomeInquiryForm from './HomeInquiryForm'

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <BottomHomeBanner />
      <HomeAbout />
      <HomeSolutionCarousel />
      <HomeTechWeUsed />
      {/* <HomeFreeAnalysis /> */}
      {/* <HomeTestimonials /> */}
      <HomeInquiryForm />
    </>
  )
}

export default HomePage