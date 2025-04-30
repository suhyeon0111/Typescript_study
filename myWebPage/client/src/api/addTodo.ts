import axios from 'axios';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export const addTodo = async (newTodo: Omit<Todo, 'id'>) =>{
    try{
        const response = await axios.post<Todo>(
            'http://localhost:3001//todos', newTodo,{

                headers: {
                    'Content-Type': 'application/json',
                },
            });
        return response.data;
    } catch (error) {
        console.error('Failed to add Todo', error);
        throw error;
    }
};

// Omit<Todo, 'id'>
// 서버가 id를 생성하니 id 없이 전달한다는 뜻