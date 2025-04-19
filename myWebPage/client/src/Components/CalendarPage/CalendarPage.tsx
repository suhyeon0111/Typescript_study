import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Logo from '../MainPage/Logo';


type Value = Date | null;

export default function CalendarPage() {
    const [date, setDate] = useState<Value>(new Date());


    return (
        <>
            <Logo />
            <Calendar
                className="calendar"
                onChange={(value: Value) => setDate(value)}
                value={date}
                selectRange={false}
            />
        </>
    )
}