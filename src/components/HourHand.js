import { useState } from "react";
import useRotate from "../hooks/useRotate";


const Hourhand = () => {

     const time = useRotate();

    const transformStyle = {
        transform: `rotate(${time.H}deg)`
    }

    return ( 
        <div className="hand hour_hand" style={transformStyle}>
             Hourhand
        </div>
     );
}
 
export default Hourhand;