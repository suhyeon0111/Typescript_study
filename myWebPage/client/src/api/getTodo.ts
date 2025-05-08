import axios from 'axios';

export const getTodo = async (day: string) => {
    try{
        const response = await axios.get(`http://localhost:3001/todos?date=${day}`);
        return response.data;
    }catch(error){
        console.error("get todos error>>>> ",error);
        throw error;
    }
}

