import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar.css";

import Logo from '../../components/common/Logo';
import ModalTodo from "../../components/Modal/ModalTodo";
import { fetchSchedulesByMonth } from "../../api/schedule";

type Value = Date;

export default function CalendarPage() {
    const [schedules, setSchedules] = useState<string[]>([]);  // 데이터 저장
    const [date, setDate] = useState<Value>(new Date());
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
        return date.toISOString().split('T')[0];
    };

    // 일정 클릭 함수
    const dayClickShowModalHandler = () => {
        setIsModalOpen(true);
        setDate(date);
        console.log("click day>>> ", date);
    }

    return (
        <>
            <Logo />
            <div className="calendarContainer">
                <Calendar
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