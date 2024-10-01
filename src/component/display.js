import React, { useState } from "react";

function Display () {
    const [cart, setCart]= useState(0)
   const  addToCart = () => {
     setCart(cart + 1)
     console.log(cart);
     
     
   } 
   
    return(<div  className="mainDisplay" >
        <div className="mainScreen" style={{border:"1px solid", height:"70px", borderRadius:"5px"}}>
            <input  style={{width:"100%", height:"40px", border:"none"}} placeholder="0" />
          <p style={{marginTop:"9px", textAlign:"right"}}>220000000.0</p>
        </div>
        
    </div>)
    

}

export default(Display)