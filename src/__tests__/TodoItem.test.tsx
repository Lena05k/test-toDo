import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem.tsx';
import { vi } from 'vitest';

describe('TodoItem Component', () => {
    test('toggles task completion status', () => {
        const todo = { text: 'Test Task', completed: false };
        const toggleTodo = vi.fn();

        render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(toggleTodo).toHaveBeenCalled();
    });
});
