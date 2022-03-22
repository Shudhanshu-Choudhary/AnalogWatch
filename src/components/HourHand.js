import { useState, useEffect} from "react";


const Hourhand = () => {

     let [value, setValue] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setValue( value => value + 25);
           // rotateClock(value); 
        }, 3600000);
    },[]);
    
    const rotateClock = (value) => {
        console.log(value);
        return {
            transform: `rotate(${value}deg)`
        }
    }

    if(value === 360) {
         setValue(0);
    }

    return ( 
        <div className="hand hour_hand" style={rotateClock(value)}>
             Hourhand
        </div>
     );
}
 
export default Hourhand;