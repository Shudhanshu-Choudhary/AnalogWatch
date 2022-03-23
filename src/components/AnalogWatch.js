import React from "react";
import '../styles/analog.css';
import watch from '../images/pngwing.com.png';
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";
import Hourhand from "./HourHand";

const AnalogWatch = () => {
    const d = new Date();

    return ( 
        <div className="container">
            <img className="watch" src={watch} alt="Clock-body"/>
            <MinuteHand />
            <SecondHand />
            <Hourhand time = {d}/>
            <div className="black_circle">
                o
            </div>
        </div>
     );
}
 
export default AnalogWatch;