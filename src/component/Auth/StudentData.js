import React, { useEffect,useState } from "react";
import "./StudentRegi.css";
import { useParams } from "react-router-dom";

function StudentData() {


const [Data, setData] = useState([])
const {id}=useParams()
console.log(id);


  const getData=async()=>{

    
    const response = await fetch(`https://studentplace-bakend.onrender.com/api/company/Data/cominfor/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
   const res= await response.json();
    console.log(res);
    setData([res])

  }



  useEffect(()=>{


    getData();

  },[])



  const onAccept=async(id)=>{

    const response = await fetch(`https://studentplace-bakend.onrender.com/api/company/Data/UpdateStatus2/${localStorage.getItem('namecomp')}/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
   const res= await response.json();
    console.log(res.status);
  
  if(res.status==true)
  {
    alert("update successfully")
  }

  
  
  }
  const onReject=async(id)=>{

    const response = await fetch(`https://studentplace-bakend.onrender.com/api/company/Data/UpdateStatus1/${localStorage.getItem('namecomp')}/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
   const res= await response.json();
    console.log(res.status);
  
  if(res.status==true)
  {
    alert("update successfully")
  }

  
  
  }





  return (
    <>
      <div className="content13">
        <div className="con13">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>STUDENT Data</h1>
        </div>
       
{
  Data.map((data,value)=>{
    return(



      <>
            <form action="" className="form17">
            <div className="form18">
              <div className="form19">
                <div className="grid">
                  <div className="data">
                    <p>CollegeName</p>
                    <h3>{data.Collagename}</h3>
                  </div>
                  <div className="data">
                    <p>Name</p>
                    <h3>{data.Name}</h3>
                  </div>
                  <div className="data">
                    <p>emailAddress</p>
                    <h5>{data.emailAddress}</h5>
                  </div>
                  <div className="data">
                    <p>SSCPercentage</p>
                    <h3>{data.SSCPercentage}%</h3>
                  </div>
                  <div className="data">
                    <p>Branch</p>
                    <h3>{data.Branch}</h3>
                  </div>
                  <div className="data">
                    <p>SPI</p>
                    <h3>{data.SPI}</h3>
                  </div>
                  <div className="data">
                    <p>HSCpercentage</p>
                    <h3>{data.HSCpercentage}%</h3>
                  </div>
                  <div className="data">
                    <p>CONTACTNO</p>
                    <h3>{data.CONTACTNO}</h3>
                  </div>
        
                </div>
  
                <div className="data1">
                  <p>projectName</p>
                  <h3>{data.PROJECTS[0].projectName}</h3>
                </div>
                <div className="data1">
                  <p>projectDescri</p>
                  <h3>
                   {data.PROJECTS[0].projectDescri}
                  </h3>
                </div>
                <div className="data1">
                  <p>projectLink</p>
                  <h3>{data.PROJECTS[0].projectLink}</h3>
                </div>
                <button onClick={()=>onAccept(data._id)}>Accept</button>
              <button onClick={()=>onReject(data._id)}>Reject</button>
              </div>
              
            </div>
          </form>
          </>


    )
  })
}
          
      </div>

      <div className="content13_1"></div>
    </>
  );
}

export default StudentData;
