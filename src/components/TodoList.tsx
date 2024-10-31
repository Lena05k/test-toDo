import React from 'react';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

interface Todo {
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
    const handleToggle = (index: number) => {
        setTodos((prev: Todo[]) =>
            prev.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <List>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} toggleTodo={() => handleToggle(index)} />
            ))}
        </List>
    );
};

export default TodoList;
