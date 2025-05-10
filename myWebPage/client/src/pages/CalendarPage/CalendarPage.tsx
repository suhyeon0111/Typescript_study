import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar.css";

import Logo from '../../components/common/Logo';
import ModalTodo from "../../components/Modal/ModalTodo";
import { fetchSchedulesByMonth } from "../../api/schedule";


export default function CalendarPage() {
    const [schedules, setSchedules] = useState<string[]>([]);  // 데이터 저장
    const [date, setDate] = useState<Date>(new Date());
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);  // 모달창 열림 여부 확인

    // 데이터 초기 받아옴
    useEffect(() => {
        const getData = async () => {
            try {
                const fetchData = await fetchSchedulesByMonth("2025-05");
                setSchedules(fetchData);
                console.log("get schedule >>>> ", fetchData);

            } catch (error) {
                alert("날짜 불러오기 실패");
                console.error("get schedule error>>>>> ", error);
            }
        };
        getData();
    }, []);

    // 날짜를 'YYYY-MM-DD' 형식으로 포맷
    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    // 일정 클릭 함수
    const dayClickShowModalHandler = () => {
        setIsModalOpen(true);
    }

    return (
        <>
            <Logo />
            <div className="calendarContainer">
                <Calendar
                    onChange={(date) => setDate(date)}
                    value={date}
                    selectRange={false}
                    onClickDay={dayClickShowModalHandler}
                    tileContent={({ date, view }) => {
                        const dateStr = formatDate(date);
                        const hasSchedule = schedules.includes(dateStr);  // 해당 날짜 포함 체크 여부

                        return view === 'month' && hasSchedule ? (
                            <div className="schedule-mark">
                                <p className="schedule-p">📌</p>
                            </div>
                        ) : null;
                    }}
                />
                {isModalOpen && <ModalTodo onClose={() => setIsModalOpen(false)} onDay={date} />}
            </div>
        </>
    )
}