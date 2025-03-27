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
                <div className="one">
                    <LuCircleUserRound style={{ width: "35px", height: "35px", margin: "5px" }} />
                    <h2>{userName}</h2>
                </div>
                <div className="two">
                    <button>다크모드</button>
                </div>
                <div className="three">
                    <button onClick={onClickLogout}>로그아웃</button>
                </div>
            </div>
        </div>
    )
}

