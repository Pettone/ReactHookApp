import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";


export const Layout = () => {

  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    //const { height, width } = pRef.current.getBoundingClientReact();
  }, [quote])

  return (
    <>
    <h1>BreakingBad Quotes</h1>
    <hr/>

    {
      isLoading 
      ?
      (
        <div className="alert alert-info text-center">
        Loading...
        </div>
      )
      :
      (
        <>
        <blockquote className="blockquote text-end"
            style = {{ display: 'flex' }}
        >
        <p ref = { pRef } className="mb-1">{ quote }</p>
        <footer className="blockquote-footer"> { author } </footer>
        </blockquote>
        <code>{ JSON.stringify(boxSize) }</code>
        </>
      )
    }

    <button 
      onClick = { decrement } 
      className="btn btn-primary"
      disabled = { isLoading }
    >
      Previously quote
    </button>
    <button 
      onClick = { increment } 
      className="btn btn-primary"
      disabled = { isLoading }
    >
      Next quote
    </button>

    </>
  )
}
