import React from "react";

function Numbers() {
    return(<div>
        <div className="row">
        <div className="col-12" style={{display:"flex", justifyContent:"space-around", marginTop:"3px", backgroundColor:"black" }}>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>1</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>2</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>6</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>+</button>
            
         
        </div>

        </div>
        <div className="row">
        <div className="col-12" style={{display:"flex", justifyContent:"space-around", marginTop:"20px" }}>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>4</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>5</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>6</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>-</button>
           
            
        </div>
        
        </div>
        <div className="row">
        <div className="col-12" style={{display:"flex", justifyContent:"space-around", marginTop:"20px" }}>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>7</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>8</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>6</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>x</button>
           
            
        </div>
        
        </div>
        <div className="row">
        <div className="col-12" style={{display:"flex", justifyContent:"space-around", marginTop:"20px" }}>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>.</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>0</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>6</button>
            <button style={{width:"50px", height:"50px", borderRadius:"25px"}}>/</button>
           
            
        </div>
        
        </div>
    </div>)
    
}export default(Numbers)