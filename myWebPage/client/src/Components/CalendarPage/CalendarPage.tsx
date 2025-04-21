import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar.css";

import Logo from '../MainPage/Logo';


type Value = Date | null;


// 예시 일정 데이터
const schedules = {
    "2025-04-23": [{ title: "스터디 모임" }],
    "2025-04-25": [{ title: "면접" }],
};

export default function CalendarPage() {
    const [date, setDate] = useState<Value>(new Date());
    const [rowCount, setRowCount] = useState<number>(6);

    const onActiveStartDateChange = ({ activeStartDate }) => {
        const firstDay = new Date(activeStartDate);
        const year = firstDay.getFullYear();
        const month = firstDay.getMonth();

        // 1일부터 말일까지 몇줄인지 계산   
        const start = new Date(year, month, 1).getDay();  // 0(일)~6(토)
        const end = new Date(year, month + 1, 0).getDate();  // 마지막 날짜
        const totalCells = start + end;
        const rows = Math.ceil(totalCells / 7);
        setRowCount(rows);
        console.log("row counting>> ", rows);
    }


    // 날짜를 'YYYY-MM-DD' 형식으로 포맷
    const formatDate = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    return (
        <>
            <Logo />
            <div className="calendarContainer">
                <Calendar
                    className={`react-calendar calendar--${rowCount}-rows`}
                    onActiveStartDateChange={onActiveStartDateChange}
                    onChange={(value: Value) => setDate(value)}
                    value={date}
                    selectRange={false}
                    tileContent={({ date, view }) => {
                        const dateStr = formatDate(date);
                        const hasSchedule = schedules[dateStr];

                        return view === 'month' && hasSchedule ? (
                            <div className="schedule-mark">
                                <p className="schedule-btn">🔔</p>
                            </div>
                        ) : null;
                    }}
                />
            </div>
        </>
    )
}