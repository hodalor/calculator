import React, { useState } from "react";

function Display ({compute, answer}) {
   
   
   
    return(<div  className="mainDisplay" >
        <div className="mainScreen" style={{border:"1px solid", height:"70px", borderRadius:"5px"}}>
            <div  style={{width:"100%", height:"40px", border:"none", textAlign:"left"}}  >{compute}</div>
          <p style={{marginTop:"9px", textAlign:"right"}}>{answer}</p>
        </div>
        
    </div>)
    

}

export default(Display)