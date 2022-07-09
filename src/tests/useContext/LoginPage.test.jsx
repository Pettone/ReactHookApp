import { LoginPage } from "../../useContext/LoginPage";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../useContext/context/UserContext";

describe('Testing <LoginPage/> component', () => {
    
        const user = {
            id: 1,
            name: 'Pett'
        }

        test('Must to show component without user', () => { 
    
            render( 
            <UserContext.Provider value = {{ user: null }}>
                <LoginPage /> 
            </UserContext.Provider>
            );
    
            const preTag = screen.getByLabelText('pre');
            expect( preTag.innerHTML ).toBe( 'null' );
            
        });


        test('Must to call setUser when button is clicked', () => { 

            const setUserMock = jest.fn();
    
            render( 
            <UserContext.Provider value = {{ user: null, setUser: setUserMock }}>
                <LoginPage /> 
            </UserContext.Provider>
            );
    
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'Juan', email: 'pett@gmail.com' });
        });
});