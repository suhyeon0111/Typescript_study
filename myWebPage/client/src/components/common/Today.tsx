import React from "react";


export default function Today() {
    const today = new Date();  // 현재 날짜

    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    // 날짜 커스텀
    return (
        <div>
            {formattedDate}
        </div>
    );
}