import useRotate from "../hooks/useRotate";

const MinuteHand = () => {

    const [value] = useRotate( 5, 60000);

    const transformStyle = {
        transform: `rotate(${value}deg)`
    }
    

    return ( 
        <div className="hand minute_hand" style={transformStyle}>
            Minute Hand
        </div>
     );
}
 
export default MinuteHand;