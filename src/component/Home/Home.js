import React from 'react'
import NavBar from '../Navbar/NavBar'
import Slider from './Slider/Slider'
import HeadServices from './Slider/HeadServices'
import Services from './services/Services'
import data from '../../ServicesData/data'
import ServicesAds from './services/ServicesAds'

import { anotherServiceData } from '../../ServicesData/data'
import OtherServices from './services/OtherServices'
import WhyOurMarket from './services/WhyOurMarket'
import HowItWorks from './services/HowItWorks'
import Testimonial from './Testimonial'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
        <NavBar />
        <Slider />
        <HeadServices />


        {data.map((service,idx)=>{
          return <div key={'service'+idx}> <Services  heading={Object.keys(service)} servicelist={Object.values(service).flat()} idx={idx}/>
           {idx === 0 && <ServicesAds /> }
           </div>
        })}

        
        {anotherServiceData.map((othersevice,idx)=>{
          return <div key={'other'+idx}>          
           
            <OtherServices servicelist={othersevice} idx={idx}/>
            {idx === 0 && <WhyOurMarket />}
            {idx === 1 && <HowItWorks />}
          </div>
        })}


        <Testimonial />

        <Footer />
    </>
  )
}

export default Home