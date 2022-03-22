import {useState, useEffect} from 'react' 

function useRotate(rValue, tValue) {
    var [value, setValue] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setValue( value => value + rValue);
        }, tValue);
    },[]);
    
    if(value === 360) {
        setValue(0);
    }

    return [value];
    // const rotateClock = (value) => {
    //     console.log(value);
    //     return {
    //         transform: `rotate(${value}deg)`
    //     }
    // }
    
}


export default useRotate;