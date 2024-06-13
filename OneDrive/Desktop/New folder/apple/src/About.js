import React from "react";
/* import "./index.css";
 */
const About = (props)=>{
console.log(props);


    return(


        <>     
        <div>  

         <h2>About made by : {props.hobby}{props.dish}</h2>
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