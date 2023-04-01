import React from "react";
import "../../../pages/HomeStyles/style/servicesAds.css";
import ad2 from '../../../images/servicesAds/WhatsApp Image 2023-04-01 at 5.13.35 AM.jpeg'
import ad3 from '../../../images/servicesAds/WhatsApp Image 2023-04-01 at 5.22.45 AM.jpeg'
import ad4 from '../../../images/servicesAds/WhatsApp Image 2023-04-01 at 5.34.38 AM.jpeg'
import ad1 from '../../../images/servicesAds/WhatsApp Image 2023-04-01 at 5.36.21 AM.jpeg'

const adsUrl = [ ad1,ad2,ad3,ad4,
];

function ServicesAds() {
  return (
    <div className="servicesAds">
      {adsUrl.map((url, idx) => {
        return (
          <div key={"url" + idx} className="servicesAds_img_holder">
            <img src={url} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default ServicesAds;
