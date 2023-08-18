import React from "react";
import "./Insight.css";
import image1 from "../../Images/insight-1-0dc1116c936358262d3cfc4145a44264.gif"
import { Link } from "react-router-dom";

function Insight() {
  return (
    <>
      <div className="content3">
        <div className="con3">
        <img src={image1} alt="" />
          <h6>DESIGN INSIGHTS</h6>
          <div className="line"></div>
          <h1>Why Design Insights?</h1>
          <h5>
            Design Insights are some of the most powerful things in the galaxy.
            They’re the flashes of deep understanding that are only unearthed
            through careful observation, accurate data, and years of experience.
            And they can make the difference between a billion dollar product
            and one that fails miserably.
          </h5>
          <button> <Link to="/compRegi">Our Services</Link></button>
        </div>
      </div>
    </>
  );
}

export default Insight;
