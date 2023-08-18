import React, { useContext,useState } from 'react'
import Course from "./Course";
import Insight from "./Insight";
import Landingp from "./Landingp";
import Mission from "./Mission";
import Work from "./Work";
import Contact from './Contact';
import context from '../Context/context';


function Home() {

  const {Register,ydata} =useContext(context);

 

  return (
    
    <>
    <Landingp/>
    <Course/>
    <Mission/>
  {(Register===true && ydata===false) && <Insight/> }   
    <Work/>
    <Contact/>
   
    </>
  )
}

export default Home