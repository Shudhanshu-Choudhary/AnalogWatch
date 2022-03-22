import useRotate from "../hooks/useRotate";


const Hourhand = () => {

     const [value] = useRotate( 25, 3600000);

    const transformStyle = {
        transform: `rotate(${value}deg)`
    }

    return ( 
        <div className="hand hour_hand" style={transformStyle}>
             Hourhand
        </div>
     );
}
 
export default Hourhand;