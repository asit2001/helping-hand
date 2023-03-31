import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import Slider from "./Slider/Slider";
import HeadServices from "./Slider/HeadServices";
import Services from "./services/Services";
import ServicesAds from "./services/ServicesAds";
import OtherServices from "./services/OtherServices";
import WhyOurMarket from "./services/WhyOurMarket";
import HowItWorks from "./services/HowItWorks";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";

import getAllData from "../../firebase";

function Home() {
  const [servicesdata, setServicesData] = useState([]);
  const [servicesList, seServicesList] = useState([]);

  useEffect(() => {
    getAllData(setServicesData);
  }, []);

  useEffect(() => {
    const newdata = [
      {
        featured: [...servicesdata.slice(0, 5)],
      },
      {
        popular: [...servicesdata.slice(-5)],
      },
    ];
    seServicesList([...newdata]);
    console.log(
      Object.values(newdata[0])
        .flat()
        .filter((data) => {
          return (
            data.category === "cleaning" ||
            data.category === "carpenters" ||
            data.category === "plumber"
          );
        })
    );
  }, [servicesdata]);

  return (
    <>
      <NavBar />
      <Slider />
      <HeadServices />

      {servicesList.map((service, idx) => {
        return (
          <div key={"service" + idx}>
            {" "}
            <Services
              heading={Object.keys(service)}
              servicelist={Object.values(service).flat()}
              idx={idx}
            />
            {idx === 0 && <ServicesAds />}
          </div>
        );
      })}

      {/* {anotherServiceData.map((othersevice,idx)=>{
          return <div key={'other'+idx}>         
            <OtherServices servicelist={othersevice} idx={idx}/>
            {idx === 0 && <WhyOurMarket />}
            {idx === 1 && <HowItWorks />}
          </div>
        })} */}
      {servicesList.length > 0 && Object.values(servicesList[0])
        .flat()
        .filter((data) => {
          return (
            data.category === "cleaning" ||
            data.category === "carpenters" ||
            data.category === "plumber"
          );
        })
        .map((othersevice, idx) => {
          return (
            <div key={"other" + idx}>
              <OtherServices servicelist={othersevice.data} heading={othersevice.category} idx={idx} />
              {idx === 0 && <WhyOurMarket />}
              {idx === 1 && <HowItWorks />}
            </div>
          );
        })}

      <Testimonial />

      <Footer />
    </>
  );
}

export default Home;
