import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Container, Typography, Box, ButtonGroup, Button } from '@mui/material';

interface Todo {
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <Container
            maxWidth="sm"
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <Box style={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>
                    todos
                </Typography>
                <TodoInput setTodos={setTodos} />
                <TodoList todos={filteredTodos} setTodos={setTodos} />
                <ButtonGroup style={{ marginTop: '20px' }}>
                    <Button
                        onClick={() => setFilter('all')}
                        variant={filter === 'all' ? 'contained' : 'outlined'}
                    >
                        All
                    </Button>
                    <Button
                        onClick={() => setFilter('active')}
                        variant={filter === 'active' ? 'contained' : 'outlined'}
                    >
                        Active
                    </Button>
                    <Button
                        onClick={() => setFilter('completed')}
                        variant={filter === 'completed' ? 'contained' : 'outlined'}
                    >
                        Completed
                    </Button>
                </ButtonGroup>
            </Box>
        </Container>
    );
};

export default App;
