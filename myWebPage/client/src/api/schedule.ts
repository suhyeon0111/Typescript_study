import axios from 'axios';

export const fetchSchedulesByMonth = async(month: string) => {
    const response = await axios.get(`http://localhost:3001/api/schedules?month=${month}`);
    return response.data;
}