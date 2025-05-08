import axios from 'axios';

export const fetchSchedulesByMonth = async(month: string) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/schedules?month=${month}`);
        return response.data;
    }catch (error) {
        console.error("get schedules error>>>>>", error);
        throw error;
    }
}