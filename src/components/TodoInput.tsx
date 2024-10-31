import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface Todo {
    text: string;
    completed: boolean;
}

interface TodoInputProps {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoInput: React.FC<TodoInputProps> = ({ setTodos }) => {
    const [input, setInput] = useState<string>('');

    const handleAddTodo = () => {
        if (input.trim()) {
            setTodos((prev: Todo[]) => [...prev, { text: input, completed: false }]);
            setInput('');
        }
    };

    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
            style={{ marginBottom: '20px' }}
        />
    );
};

export default TodoInput;
