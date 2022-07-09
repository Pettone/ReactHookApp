import { render, screen } from "@testing-library/react";
import { MainApp } from "../../useContext/MainApp";
import { MemoryRouter } from "react-router-dom";


describe('Testing <MainApp/> component', () => { 

    test('Must to show HomePage correctly', () => { 

        render(
        <MemoryRouter>
            <MainApp/>
        </MemoryRouter>
        );

        expect( screen.getByText('Home Page') ).toBeTruthy();
    });

    test('Must to show LoginPage correctly', () => { 

        render(
        <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
        </MemoryRouter>
        );

        expect( screen.getByText('Login Page') ).toBeTruthy();
    });

    test('Must to show LoginPage correctly', () => { 

        render(
        <MemoryRouter initialEntries={['/about']}>
            <MainApp/>
        </MemoryRouter>
        );

        expect( screen.getByText('About Page') ).toBeTruthy();
    });
});
