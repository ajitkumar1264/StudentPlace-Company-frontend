import React,{useState} from 'react'
import context from './context'

function Companystate(props) {


    const [Register, setRegister] = useState(false);
    const [login, setlogin] = useState(false);
    const [ydata, setydata] = useState(false);

  return (
    <context.Provider  value={{Register,setRegister,login,setlogin,ydata,setydata}}>
    {props.children}
    </context.Provider>
  )
}

export default Companystate