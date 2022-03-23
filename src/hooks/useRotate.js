import {useState, useEffect} from 'react' ;


function useRotate() {

    var [time, setTime] = useState({});

    var getTime = () => {
        const D = new Date();
        console.log("getTime");

        var H = (D.getHours() * 15) - 90 ;
        var M =  (D.getMinutes() * 6) - 90;
        var S = (D.getSeconds() * 6 ) - 90;

        setTime({H, M, S});
       
        return time;
    }

    useEffect(() => {
        console.log("useEffect");

        setInterval(() => {
            getTime();
        }, 1000);
    },[]);
    
    console.log("actual return");

    return time;

}


export default useRotate;