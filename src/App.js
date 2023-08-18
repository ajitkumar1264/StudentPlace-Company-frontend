import "./App.css";
import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import Home from "./component/Home/Home";
import Navbar from "./component/Home/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studentlist from "./component/Home/Studentlist";
import StudentData from "./component/Auth/StudentData"
import Compdata from "./component/Auth/Compdata";
import StudentRegi from "./component/Auth/StudentRegi";
import Companystate from "./component/Context/companystate";

function App() {
  return (
    <>
      <BrowserRouter>
      <Companystate>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/compdata" element={<Compdata/>} />
            <Route path="//studata/:id" element={<StudentData/>} />
            <Route path="/studentlist" element={<Studentlist/>} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/CompRegi" element={<StudentRegi />} />
          </Routes>
          </Companystate>
      </BrowserRouter>
    </>
  );
}

export default App;
