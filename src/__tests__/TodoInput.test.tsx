import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from '../components/TodoInput';
import { vi } from 'vitest';

describe('TodoInput Component', () => {
    test('adds new task to the list', () => {
        const setTodos = vi.fn();
        render(<TodoInput setTodos={setTodos} />);

        const input = screen.getByPlaceholderText('What needs to be done?');
        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        expect(setTodos).toHaveBeenCalledWith(expect.any(Function));
    });
});
