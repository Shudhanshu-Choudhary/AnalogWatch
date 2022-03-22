import { useState, useEffect} from "react";
// var minInterval;

// const rotate = {
    
// }

const MinuteHand = () => {

    let [value, setValue] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setValue( value => value + 5);
           // rotateClock(value); 
        }, 60000);
    },[]);
    
    const rotateClock = (value) => {
        console.log(value);
        return {
            transform: `rotate(${value}deg)`
        }
    }
    

    return ( 
        <div className="hand minute_hand" style={rotateClock(value)}>
            Minute Hand
        </div>
     );
}
 
export default MinuteHand;