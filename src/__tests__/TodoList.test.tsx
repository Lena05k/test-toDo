import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { vi } from 'vitest';

interface Todo {
    text: string;
    completed: boolean;
}

describe('TodoList Component', () => {
    const mockSetTodos = vi.fn();
    const sampleTodos: Todo[] = [
        { text: 'Task 1', completed: false },
        { text: 'Task 2', completed: true },
        { text: 'Task 3', completed: false },
    ];

    beforeEach(() => {
        mockSetTodos.mockClear();
    });

    test('renders all tasks correctly', () => {
        render(<TodoList todos={sampleTodos} setTodos={mockSetTodos} />);

        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
        expect(screen.getByText('Task 3')).toBeInTheDocument();
    });

    test('toggles task completion status', () => {
        render(<TodoList todos={sampleTodos} setTodos={mockSetTodos} />);

        const checkboxes = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxes[0]);

        expect(mockSetTodos).toHaveBeenCalledTimes(1);
        expect(mockSetTodos).toHaveBeenCalledWith(expect.any(Function));
    });

    test('filters tasks correctly', () => {
        render(<TodoList todos={sampleTodos.filter(todo => !todo.completed)} setTodos={mockSetTodos} />);

        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
        expect(screen.getByText('Task 3')).toBeInTheDocument();
    });
});
