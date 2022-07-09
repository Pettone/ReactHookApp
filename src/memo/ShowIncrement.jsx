import { memo } from "react";


export const ShowIncrement = memo(( { increment } ) => {

    console.log(`I'm generating again...`);

    return (
        <button 
            className="btn btn-primary"
            onClick = { () => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
})
