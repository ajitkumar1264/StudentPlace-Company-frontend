import { useNavigate } from "react-router-dom";
import "./StudentRegi.css";
import React, { useState,useContext } from "react";
import context from "../Context/context";

function StudentRegi() {
 const {setydata}= useContext(context)
  const nav = useNavigate();
  const {setRegister}=useContext(context)
  const [skills, setskills] = useState([]);
  const [role, setrole] = useState([])
  const [Data, setData] = useState({
    compname:"",
    location:"",
    link:"",
    salary:"",
    jobtype:"",
    schedule:"",
    jobdescri:""
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(Data);
    console.log(skills)
    console.log(role)

    const response = await fetch(
      `https://studentplace-bakend.onrender.com/api/company/Data/Companyinfo`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          compname:Data.compname.toUpperCase(),
          location:Data.location,
          link:Data.link,
          skills,
          role,
          salary:Data.salary,
          jobtype:Data.jobtype,
          schedule:Data.schedule,
          jobdescri:Data.jobdescri
        }),
      }
    );
    const res = await response.json();
    console.log(Data, res);
    if (res.status) {
      nav("/home");
      setRegister(true);
      setydata(true);

    }
  };

  const handleskills=(e)=>{
      const data=e.target.value;
      const skills=data.split(',')
      setskills([...skills]);
  }
  const handlerole=(e)=>{
      const data=e.target.value;
      const role=data.split(',')
      setrole([...role]);
  }
  const handleonchange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="content13">
        <div className="con13">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>Company REGISTER</h1>
        </div>

        <form action="" className="form17">
          <div className="form18">
            <div className="form19">
            <div className="data1">
                  <p>Company Name</p>
                 <input type="text"  name="compname" onChange={handleonchange} />
                </div>

                <div className="data1">
                  <p>Link</p>
                  <input
                    type="text"
                    id="emailAddress"
                    name="link"
                    onChange={handleonchange}
                  />
                </div>
                
                <div className="data1">
                  <p>Location</p>
                  <input
                    type="text"
                    id="Name"
                    name="location"
                    onChange={handleonchange}
                  />
                </div>
                
                <div className="data1">
                  <p>Skills</p>
                  <input
                    type="text"
                    id="SSCPercentage"
                    name="skills"
                    onChange={handleskills}
                  />
                </div>
                <div className="data1">
                  <p>Role</p>
                 <input type="text"  name="role" onChange={handlerole}/>
                </div>
                <div className="data1">
                  <p>Salary</p>
                  <input
                    type="text"
                    id="SPI"
                    name="salary"
                    onChange={handleonchange}
                  />
                </div>
                <div className="data1">
                  <p>job Type</p>
                  <input
                    type="text"
                    id="HSCpercentage"
                    name="jobtype"
                    onChange={handleonchange}
                  />
                </div>
                <div className="data1">
                  <p>Schedule</p>
                  <input
                    type="text"
                    id="CONTACTNO"
                    name="schedule"
                    onChange={handleonchange}
                  />
                </div>
           

              <div className="data1">
                <p>Job Description</p>
                <input
                  type="text"
                  id="projectName"
                  name="jobdescri"
                  onChange={handleonchange}
                />
              </div>
             

              <button onClick={handlesubmit}>SUBMIT</button>
            </div>
          </div>
        </form>
      </div>

      <div className="content13_1"></div>
    </>
  );
}

export default StudentRegi;
