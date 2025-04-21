import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar.css";

import Logo from '../MainPage/Logo';
import ModalTodo from "./ModalTodo";

type Value = Date | null;


// 예시 일정 데이터
const schedules = {
    "2025-04-23": [{ title: "스터디 모임" }],
    "2025-04-25": [{ title: "면접" }],
};

export default function CalendarPage() {
    const [date, setDate] = useState<Value>(new Date());
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);  // 모달창 열림 여부 확인

    // 날짜를 'YYYY-MM-DD' 형식으로 포맷
    const formatDate = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    // 일정 클릭 함수
    const dayClickShowModalHandler = () => {
        setIsModalOpen(true);

        // setIsModalOpen(false);  // 다시 닫아주기
    }

    return (
        <>
            <Logo />
            <div className="calendarContainer">
                <Calendar
                    onChange={(value: Value) => setDate(value)}
                    value={date}
                    selectRange={false}
                    onClickDay={dayClickShowModalHandler}
                    tileContent={({ date, view }) => {
                        const dateStr = formatDate(date);
                        const hasSchedule = schedules[dateStr];

                        return view === 'month' && hasSchedule ? (
                            <div className="schedule-mark">
                                <p className="schedule-p">📌</p>
                            </div>
                        ) : null;
                    }}
                />
                {isModalOpen && <ModalTodo onClose={() => setIsModalOpen(false)} />}
            </div>
        </>
    )
}