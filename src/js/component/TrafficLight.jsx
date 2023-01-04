import { func } from "prop-types";
import  React ,{ useState } from "react";

function TrafficLight(){
    const [color,setColor]= useState("");

      
      return(<div className="bg-dark btn-group-vertical h-100 d-inline-block ">
    <div className="btn-group-vertical "  >
    <button type="button" style={{height: '100px', width: '100px'}} className={"btn btn-danger rounded-circle ms-3 me-3 mt-3"+ (color === "rojo"? "shadow":"" )} onClick={()=>{setColor("rojo")}}></button>
    <button type="button" style={{height: '100px', width: '100px'}} className={"btn btn-warning rounded-circle ms-3 me-3 " + (color === "amarillo"? "shadow":"") } onClick={()=>{setColor("amarillo")}}></button>
    <button type="button" style={{height: '100px', width: '100px'}} className={"btn btn-success rounded-circle ms-3 me-3 mb-3"+ (color === "verde"?"shadow":"") } onClick={()=>{setColor("verde")}}></button>
  </div>
  </div>
    );
  };

export default TrafficLight;
