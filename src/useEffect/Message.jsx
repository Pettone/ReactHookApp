import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({
        X: 0,
        Y: 0
    });

    useEffect(() => {

        const onMouseMove = ({x,y}) => {
            setCoords({x,y});
        }
      
        window.addEventListener('mousemove', onMouseMove );

        return () => {
        windows.removeEventListener('mousemove', onMouseMove);
        }
    }, [])
    
  
    return (
        <>
        <h3>User already exist!</h3>

        { JSON.stringify( coords ) }
        </>
    )
}
