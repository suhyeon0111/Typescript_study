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

    // 날짜를 'YYYY-MM-DD' 형식으로 포맷
    const formatDate = (date: Date) => {
        return date.toISOString().split('T')[0];
    };
    //테스트
    return (
        <>
            <Logo />
            <div className="calendarContainer">
                <Calendar
                    onChange={(value: Value) => setDate(value)}
                    value={date}
                    selectRange={false}
                    tileContent={({ date, view }) => {
                        const dateStr = formatDate(date);
                        const hasSchedule = schedules[dateStr];

                        return view === 'month' && hasSchedule ? (
                            <div className="schedule-mark">
                                <button className="schedule-btn">🔔</button>
                            </div>
                        ) : null;
                    }}
                />
            </div>
        </>
    )
}