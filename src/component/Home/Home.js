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
import Hr from '../Hr'

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
           
            <Hr />
            <OtherServices servicelist={othersevice} idx={idx}/>

            {idx === 1 && <> <Hr /> <WhyOurMarket /></>}
          </div>
        })}
    </>
  )
}

export default Home