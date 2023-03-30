import React from "react";
import '../../../style/servicesAds.css'

const adsUrl = [
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678463309015-2b92d2.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678721769247-44fa76.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678463313266-174e91.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1678721781429-69c225.jpeg",
];

function ServicesAds() {
  return <div className="servicesAds">{adsUrl.map((url,idx)=>{
    return <div key={'url'+idx} className="servicesAds_img_holder">
        <img src={url} alt='' />
    </div>
  })}</div>;
}

export default ServicesAds;
