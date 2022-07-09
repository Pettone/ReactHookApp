import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../hooks/useCounter";


describe('Testing in useCounter', () => { 

    test('Must to return defaults values', () => { 

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('Must to return a value of 100 sended as props', () => { 

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
       
    });

    test('Counter must to increment', () => { 

        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;

       act( () => {
        increment();
       });

       expect( result.current.counter ).toBe(101);
       
    });

    test('Counter must to decrement', () => { 

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

       act( () => {
        decrement();
       });

       expect( result.current.counter ).toBe(99);
       
    });

    test('Counter must to reset', () => { 

        const { result } = renderHook( () => useCounter(101) );
        const { counter, reset, increment } = result.current;

       act( () => {
        increment();
        reset();
       });

       expect( result.current.counter ).toBe(101);
       
    });

});