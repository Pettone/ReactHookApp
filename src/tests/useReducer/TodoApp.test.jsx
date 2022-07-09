import { render, screen } from "@testing-library/react";
import { useTodos } from "../../hooks/useTodos";
import { TodoApp } from "../../useReducer/TodoApp";

jest.mock('../../hooks/useTodos');

describe('Testing <TodoApp /> component', () => {

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true }
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn()
    });

    test('must to show component correctly', () => { 

        render( <TodoApp /> );
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

    });
});