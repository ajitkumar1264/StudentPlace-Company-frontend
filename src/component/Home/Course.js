import React from "react";
import "./Course.css"
import chart from "../../Images/home-service-img1-1f4ef4cb29a618623f04496b4e479cc7 (1).png"
import chart1 from "../../Images/home-service-img2-986e370baeddaeef7b42b2acee843871.png"



function Course() {
  return (
    <>
      <div className="content1">
      <img className="img1" src={chart} alt="" />
      <img  className="img2" src={chart1} alt="" />
      <div className="con1">
        <h6>What we can help you do</h6>
        <div className="line"></div>
        <h1>Chart your course</h1>
        <h5>
          Our team of design veterans love building complex digital products and
          integrated services. We'll help you navigate and discover valuable
          insights that will unlock huge breakthroughs for your organization.
        </h5>
        <div className="griditems">
        <h3>Growth Design</h3>
        <h3>Growth Design</h3>
        <h3>Growth Design</h3>
        <h3>Growth Design</h3>
        <h3>Growth Design</h3>
        </div>
        <button>Our Services</button>
        </div>
      </div>
    </>
  );
}

export default Course;
