import React, { useState } from "react";
import Select from "react-select";
import { routes } from "../routes/routesdata";
import io from "socket.io-client";
import './Dashboard.css'; 
import { FaUser } from 'react-icons/fa';
const socket = io.connect("http://localhost:4200");


export default function DashBoard(props) {
  const handleChange = (e) => {
    setStartMap(e.target.value);
    setDestiMap(e.target.value);
   // socket.emit("route-added", {id: socket.id, route: e.value});
  };
  // let [startMap,setStartMap]=useState("");
  
  // let[destiMap,setDestMap]=useState("");

  const [startMap, setStartMap] = useState("")
  const [destiMap, setDestiMap] = useState("")

  const display=()=>{
    console.log(startMap+" To "+destiMap);

  }
  return (
    <div>
      <div className="navbaar">
        <img src="./logo.jpg"/>
      <FaUser className="userico" icon="fa-solid fauser" /><span>Vanshaj Tiwari</span>
      <button>Log Out</button>
      </div>
      <div className="icoio"><img src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>
                    <img src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
                    <img src='https://img.icons8.com/windows/50/000000/square-full.png'/></div>
<form>
    
    <Select
    values={startMap}
    className="selectkaro"
      options={routes}
     onChange={(e)=>setStartMap(e.values)}
      placeholder="Your Location"/>
    <Select
    // value={destiMap}
    className="selectkaro"
      options={routes}
      onChange={(e)=>setDestiMap(e.values)}
      placeholder="Destination"
    />
    <button onClick={display}>Confirm</button>
  </form>
    </div>
    
  );
}