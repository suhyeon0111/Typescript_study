import React from "react";
import { useEffect, useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { CiLight, CiDark } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";

import useThemeToggleStore from "../../stores/useThemeToggleStore";
import Logo from "../MainPage/Logo";


export default function MyPage() {
    const location = useLocation();
    const userName = location.state?.userName || "Guest";
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const navigate = useNavigate();
    // const [isDark, setIsDark] = useState<boolean>(false);
    const { themeMode, setThemeMode } = useThemeToggleStore();

    // userName 값이 바뀔 때마다 로그인 상태 업데이트
    useEffect(() => {
        setIsLogin(userName !== "Guest");
    }, [userName]);

    const onClickLogout = () => {
        navigate('/');
    }

    const onClickLogin = () => {
        navigate('/login');
    }


    return (
        <div className="MyPageContainer">
            <Logo />
            <div>
                <div className="one">
                    <LuCircleUserRound size={35} style={{ margin: "5px" }} />
                    <h2>{userName}</h2>
                </div>
                <div className="two">
                    <button onClick={() => setThemeMode(!themeMode)}>
                        {themeMode ? '다크모드' : '라이트모드'}
                    </button>
                    {/* {!isDark ? (
                        <button> <CiDark />다크모드</button>
                    ) : (
                        <button> <CiLight />라이트모드</button>
                    )} */}
                    {!isLogin ? (
                        <button onClick={onClickLogin}>로그인</button>
                    ) : (
                        <button onClick={onClickLogout}>로그아웃</button>
                    )}
                </div>
            </div>
        </div>
    )
}

