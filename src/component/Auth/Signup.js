import React,{useContext, useState} from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import context from '../Context/context';

function Signup() {

 const {setRegister}= useContext(context)
  const nav=useNavigate();

  const [Data, setData] = useState({Comname:"",Comemail:"",Compassword:""})

  const handlesubmit=async(e)=>{

    e.preventDefault();


    const response = await fetch(`https://studentplace-bakend.onrender.com/api/company/auth/regicomp`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify({Comname:Data.Comname.toUpperCase(),Comemail:Data.Comemail,Compassword:Data.Compassword}), 
    });
   const res= await response.json();
    console.log(Data,res);
    localStorage.setItem('namecomp',Data.Comname.toUpperCase());
    if(res.status)
    {
      nav("/login");
      setRegister(true);
    }
  }

  const handleonchange=(e)=>{

    setData({...Data,[e.target.name]:e.target.value})
  }

  return (
   <>
   
   <div className="content12">
        <div className="con12">
          <h6>GET IN TOUCH</h6>
          <div className="line"></div>
          <h1>Sign up Here</h1>
        </div>

        <form action="" className="form14">
          <div className="form15">
            <div className="form16">
              <div className="grid">
                <div className="data">
                  <p>Name</p>
                  <input type="text" id="name"  name='Comname' onChange={handleonchange}/>
                </div>
                <div className="data">
                  <p>Emaill</p>
                  <input type="text" id="name" name='Comemail' onChange={handleonchange} />
                </div>
                <div className="data">
                  <p>Password</p>
                  <input type="text" id="name" name='Compassword' onChange={handleonchange} />
                </div>
              </div>

              <button onClick={handlesubmit} >SIGN UP</button>
            </div>
          </div>
        </form>
      </div>

      <div className="content5_1"></div>
   
   
   </>
  )
}

export default Signup