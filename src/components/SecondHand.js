import  {useState, useEffect} from 'react';

const SecondHand = () => {

    let [value, setValue] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setValue( value => value + 5);
           // rotateClock(value); 
        }, 1000);
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
        <div className="hand second_hand" style={rotateClock(value)}>
            SecondHand
        </div>
     );
}
 
export default SecondHand;