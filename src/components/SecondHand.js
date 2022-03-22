import useRotate from "../hooks/useRotate";

const SecondHand = () => {
     
    const [value] = useRotate( 5, 1000);

    const transformStyle = {
        transform: `rotate(${value}deg)`
    }
   

    return ( 
        <div className="hand second_hand" style={transformStyle}>
            SecondHand
        </div>
     );
}
 
export default SecondHand;