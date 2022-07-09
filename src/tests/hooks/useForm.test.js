import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../hooks/useForm";

describe('Testing useForm hook', () => {
    
    const initialForm = {
        name: 'Pett',
        email: 'pett@gmail.com'
    }

    test('Must to return an object by default', () => { 

        const { result } = renderHook( () => useForm(initialForm) );
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });
    });

    test('Must to change forms name', () => {

        const newValue = 'Juan';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });
        
     
        expect( result.current.name ).toBe('Juan');
        expect( result.current.formState.name ).toBe(newValue);
    });

    test('Must to reset forms name', () => {

        const newValue = 'Juan';
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });
        
     
        expect( result.current.name ).toBe(initialForm.name);
        expect( result.current.formState.name ).toBe(initialForm.name);
    });
});