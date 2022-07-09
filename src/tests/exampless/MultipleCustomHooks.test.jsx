import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../exampless/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Testing MultipleCustomHooks component', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Must to show component correctly', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button',{ name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();
    });


    test('Must to show a Quote', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Pett', quote: 'Hi World!.' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hi World!.') ).toBeTruthy();
        expect( screen.getByText('Pett') ).toBeTruthy();

        const nextButton = screen.getByRole('button',{ name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('Must to call increment function', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Pett', quote: 'Hi World!.' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button',{ name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});