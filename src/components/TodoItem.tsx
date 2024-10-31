import React from 'react';
import { ListItem, Checkbox, Typography } from '@mui/material';

interface Todo {
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    toggleTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
        <ListItem
            style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: todo.completed ? 'line-through' : 'none',
            }}
        >
            <Checkbox
                checked={todo.completed}
                onChange={toggleTodo}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Typography
                variant="body1"
                style={{
                    color: todo.completed ? '#9e9e9e' : '#000',
                }}
            >
                {todo.text}
            </Typography>
        </ListItem>
    );
};

export default TodoItem;
