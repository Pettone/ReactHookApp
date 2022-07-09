import { todoReducer } from "../../useReducer/todoReducer";

describe('Testing todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('Must to return the initial state', () => { 

        const newState = todoReducer(initialState, {});
        expect( newState ).toBe(initialState);
    });

    test('Must to add a TODO', () => { 

        const action = {
            type: '[TODO Add Todo]',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect( newState.length ).toBe(2);
        expect( newState ).toContain(action.payload);
    });

    test('Must to delete a TODO', () => { 

        const action = {
            type: '[TODO] Remove Todo',
            payload: 2
        };     

        const newState = todoReducer(initialState, action);
        expect( newState.length ).toBe(1);
        expect( newState ).not.toContain(action.payload);
        
    });

    test('Must to do todos Toggle', () => { 

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };
        
        const newState = todoReducer(initialState, action);
        expect( newState[0].done ).toBe(true);

        const newState2 = todoReducer(newState, action);
        expect( newState2[0].done ).toBe(false);
    });
});