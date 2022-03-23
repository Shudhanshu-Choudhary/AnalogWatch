import useRotate from "../hooks/useRotate";

const MinuteHand = () => {

    const time = useRotate();

    console.log(time);

    const transformStyle = {
        transform: `rotate(${time.M}deg)`
    }
    

    return ( 
        <div className="hand minute_hand" style={transformStyle}>
            Minute Hand
        </div>
     );
}
 
export default MinuteHand;