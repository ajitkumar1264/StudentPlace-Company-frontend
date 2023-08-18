import React from "react";
import "./Work.css";
import image1 from "../../Images/come-in-three-4adb8a9deeb24dbb0e6b342596c39e1a.png"

function Work() {
  return (
    <>
      <div className="content4">
        <div className="con4">
        <img src={image1} alt="" />
          <h6>HOW WE WORK</h6>
          <div className="line"></div>
          <h1>We Come in Threes</h1>
          <h5>
            Embarking on a design quest with ZURB is unlike anything else you’ve
            ever experienced. A Design Lead and Designer will be your copilots
            to refine ideas and build prototypes and Advocate will help surface
            insights. We move really fast and hate radio silence, so expect
            communication from us every 2 days to share progress and ensure
            we’re on the right path. We’re there every step of the way to make
            sure you achieve your objectives and touch down safely!
          </h5>
          <button>Our Process</button>
        </div>
      </div>
      <div className="content4_1">
      </div>
    </>
  );
}

export default Work;
