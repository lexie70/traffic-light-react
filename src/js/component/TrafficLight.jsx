import  React ,{ useState } from "react";

const colors =["red","yellow","green"]

function TrafficLight(){
    const [color,setColor]= useState("btn btn-danger");
   
    return(
    <div className="btn-group-vertical "  >
    <button type="button" className="btn btn-danger"></button>
    <button type="button" className="btn btn-warning"></button>
    <button type="button" className="btn btn-success"></button>
  </div>

    )
}
export default TrafficLight;