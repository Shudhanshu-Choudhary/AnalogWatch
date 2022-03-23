import useRotate from "../hooks/useRotate";

const SecondHand = () => {
     
    const time = useRotate();

    const transformStyle = {
        transform: `rotate(${time.S}deg)`
    }
   

    return ( 
        <div className="hand second_hand" style={transformStyle}>
            SecondHand
        </div>
     );
}
 
export default SecondHand;