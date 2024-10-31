import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App.tsx';

describe('App Component', () => {
    test('filters tasks correctly', () => {
        render(<App />);

        const input = screen.getByPlaceholderText('What needs to be done?');

        // Добавляем две задачи: одну выполненную и одну невыполненную
        fireEvent.change(input, { target: { value: 'Task 1' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
        fireEvent.change(input, { target: { value: 'Task 2' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        // Отмечаем первую задачу как выполненную
        const checkbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(checkbox);

        // Проверяем фильтр "All"
        fireEvent.click(screen.getByText('All'));
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();

        // Проверяем фильтр "Active"
        fireEvent.click(screen.getByText('Active'));
        expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();

        // Проверяем фильтр "Completed"
        fireEvent.click(screen.getByText('Completed'));
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
    });
});
