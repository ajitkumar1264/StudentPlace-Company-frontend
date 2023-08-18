import React, { useState, useEffect } from "react";
import "./Studentlist.css";
import { Link, useNavigate } from "react-router-dom";

function Studentlist() {
  const nav=useNavigate();
  const [Data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://studentplace-bakend.onrender.com/api/company/Data/Cstudentfetch/${localStorage.getItem("namecomp")}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    console.log(res);
    const length=res.userdata.length;
    console.log(length);
    setData(res.userdata);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="content16">
        <div className="con16">
          <div className="cname">
            <h1>
              {" "}
              <span>{localStorage.getItem("namecomp")}</span> apply Student list
            </h1>
          </div>
          <div className="table">
            <table border={3}>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>College</th>
                <th>Branch</th>
                <th>SPI</th>
                <th>All Details</th>
              </tr>

         
            {Data.length!==0 && Data.map((data, key) => {
                return (
                  <tr>
                    <td>{data.Name}</td>
                    <td>{data.emailAddress}</td>
                    <td>{data.Collagename}</td>
                    <td>{data.Branch}</td>
                    <td>{data.SPI}</td>
                    <td>
                      <button>
                        <Link to={`/studata/${data._id}`}>see</Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Studentlist;
