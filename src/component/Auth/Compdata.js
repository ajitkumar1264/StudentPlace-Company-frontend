import React,{useState,useEffect, useContext} from 'react';
import "./StudentRegi.css";
import context from '../Context/context';

function Compdata() {

const [Data, setData] = useState([])
const {setRegister,setydata}=useContext(context)
const [len, setlen] = useState(0)
  const getData=async()=>{

    
    const response = await fetch(`https://studentplace-bakend.onrender.com/api/company/Data/cominform/${localStorage.getItem('namecomp')}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
   const res= await response.json();
    console.log(res.length);
    setlen(res.length)
    if(res.length != 0 )
    {
      setRegister(true);
      setydata(true);
    }
    setData([res[0]]);
  
  }



  useEffect(()=>{


    getData();

  },[])






  return (
    <>
    
    <div className="content13">
        <div className="con13">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>Compnay Data</h1>
        </div>
        {len ==0 && <h2>go to insight section and register</h2>}
        {len!==0 && Data.map((data,key)=>{
            return(


              <form action="" className="form17" key={key}>
              <div className="form18">
                <div className="form19">
                    <div className="data1">
                      <p>CompnayName</p>
                      <h3>{data.compname}</h3>
                    </div>
                    <div className="data1">
                      <p>Location</p>
                      <h3>{data.location}</h3>
                    </div>
                    <div className="data1">
                      <p>Skills</p>
                      {
                        data.skills.map((value,key)=>{
                          return(
                            <>
                            <h3>{value}</h3>
                            </>
                          )
                        })
                      }
                      
                    </div>
                    <div className="data1">
                      <p>Role</p>
                      {
                        data.role.map((value,key)=>{
                          return(
                            <>
                            <h3>{value}</h3>
                            </>
                          )
                        })
                      }
                      
                    </div>
                    <div className="data1">
                      <p>Salary</p>
                      <h3>{data.salary}</h3>
                    </div>
                    <div className="data1">
                      <p>Schedule</p>
                      <h3>{data.schedule}</h3>
                    </div>
                   
                   
             
    
                  <div className="data1">
                    <p>Job Description</p>
                    <h3>{data.jobdescri}</h3>
                  </div>
                 
                </div>
                
              </div>
            </form>
  

            )
          })
        }
           
      </div>

      <div className="content13_1"></div>
    
    </>
  )
}

export default Compdata