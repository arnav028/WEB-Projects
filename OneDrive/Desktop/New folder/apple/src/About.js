import React from "react";
/* import "./index.css";
 */
const About = ()=>{
const boxCSS = {
    Width: "300px",
    height: "300px",
    backgroundColor: "purple",
    color: "white",
    margin: "auto"
}

    return(


        <>     
        <div className="box" style={boxCSS} >  

         <h2 style={{ color:"red", backgroundColor:"violet"}} >About us bhi ahi gya</h2>
         <p>code with ankur papa</p>
         </div>

</>
        
      /* inline css  <>     
        <div className="box" style={{width:"300px", backgroundColor:"yellow"}} >  

         <h2 style={{ color:"red", backgroundColor:"violet"}} >About us bhi ahi gya</h2>
         <p>code with ankur papa</p>
         </div>

</> */

    )
}

export default About ;