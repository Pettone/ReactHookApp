import { render, screen } from "@testing-library/react";
import { UserContext } from "../../useContext/context/UserContext";
import { HomePage } from "../../useContext/HomePage";

describe('Testing <HomePage/> component', () => {
    
    const user = {
        id: 1,
        name: 'Pett'
    }

    test('Must to show component without user', () => { 

        render( 
        <UserContext.Provider value = {{ user: null }}>
            <HomePage /> 
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );
        
    });

    test('Must to show component with user', () => { 

        render( 
        <UserContext.Provider value = {{ user }}>
            <HomePage /> 
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );

    });

})