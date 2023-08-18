import React from "react";
import "./Mission.css";
import logo1 from "../../Images/firefox-logo-189e086d41ba66ceb8e1e0abdf51f659.png"
import logo2 from "../../Images/docker-logo-760edaaa4c90c9096a9ac1e3ca01e7fb.png"
import logo3 from "../../Images/ebay-logo-d93563ab9382bbd908165376031d66ea.png"
import logo4 from "../../Images/mcafee-logo-7c5632045556f8bf5009fd91ed51b89c.png"
import logo5 from "../../Images/natgeo-logo-f9e32c6feee69efdcd575855c936db5f.png"
import logo6 from "../../Images/netflix-logo-c049de8bab8e8ebfc8533c20c23dbacf.png"
import image1 from "../../Images/mcafee-img-babc0a4974a2f8bce164caab3c9b8526.jpg"
import image2 from "../../Images/revel-img-e365bd3372ee50378d50cb48739d8b4d.jpg"
import image3 from "../../Images/nema-img-6b7e4ab37a0e37577488e77595985181.jpg"

function Mission() {
  return (
    <>
      <div className="content2">
     <div className="logos">
     
     <img src={logo1} className="logo1" alt="" />
     <img src={logo2} className="logo2" alt="" />
     <img src={logo5} className="logo5" alt="" />
     <img src={logo4} className="logo4" alt="" />
     <img src={logo3} className="logo3" alt="" />
     <img src={logo6} className="logo6" alt="" />
    
     </div>

    
        <div className="con2">
          <h6>WHAT WE'VE DONE</h6>
          <div className="line"></div>
          <h1>Missions Accomplished</h1>
          <h5>
            From multi-billion dollar conglomerates to two-person startups, from
            biotech to Britney Spears, and from SF to Tokyo, our team has
            successfully guided organizations big and small to those “Aha!”
            moments that transformed their business.
          </h5>
          <button>Our Case studies</button>
        </div>
      </div>
      <div className="content2_1">
      
      <div className="images">
     
      <img src={image1} className="image1" alt="" />
      <img src={image2} className="image2" alt="" />
      <img src={image3} className="image3" alt="" />
      </div>
       
      </div>
    </>
  );
}

export default Mission;
