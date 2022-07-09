import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../useReducer/TodoItem";

describe('Testing TodoItem', () => { 

    const todo = {
        id: 1,
        description: 'Souls Rock',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Must to show pending Todo to complete', () => { 

        render(<TodoItem 
            todo = { todo } 
            onToggleTodo = { onToggleTodoMock }
            onDeleteTodo = { onDeleteTodoMock }
            />);

        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
    });

    test('Must to show todo completed', () => {
        
        todo.done = true;

        render(<TodoItem 
            todo = { todo } 
            onToggleTodo = { onToggleTodoMock }
            onDeleteTodo = { onDeleteTodoMock }
            />);
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('span must to call ToggleTodo when clicked', () => { 

        render(<TodoItem 
            todo = { todo } 
            onToggleTodo = { onToggleTodoMock }
            onDeleteTodo = { onDeleteTodoMock }
        />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);    
    });

    test('button must to call deleteTodo', () => { 

        render(<TodoItem 
            todo = { todo } 
            onToggleTodo = { onToggleTodoMock }
            onDeleteTodo = { onDeleteTodoMock }
        />);

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);    
    });
});