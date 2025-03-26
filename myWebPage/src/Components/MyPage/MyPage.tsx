import { useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";

export default function MyPage() {
    const location = useLocation();
    const userName = location.state?.userName || "Guest";
    const navigate = useNavigate();

    const onClickLogout = () => {
        navigate('/');
    }

    return (
        <div className="MyPageContainer">
            <div>
                <LuCircleUserRound />
                {userName}
            </div>
            <div>
                <button>다크모드</button>
            </div>
            <div>
                <button onClick={onClickLogout}>로그아웃</button>
            </div>
        </div>
    )
}