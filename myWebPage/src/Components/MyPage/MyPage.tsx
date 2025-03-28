import { useEffect, useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";

export default function MyPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const userName = location.state?.userName || "Guest";
    const [IsLogin, setIsLogin] = useState<boolean>(false);

    // userName 값이 바뀔 때마다 로그인 상태 업데이트
    useEffect(() => {
        if (userName === "Guset") {
            setIsLogin(false);
        } else {
            setIsLogin(true)
        }
    }, [userName]);

    const onClickDarkMode = () => {

    }
    const onClickLogout = () => {
        navigate('/');
    }

    const onClickLogin = () => {
        navigate('/login');
    }

    return (
        <div className="MyPageContainer">
            <div>
                <div className="one">
                    <LuCircleUserRound style={{ width: "35px", height: "35px", margin: "5px" }} />
                    <h2>{userName}</h2>
                </div>
                <div className="two">
                    <button onClick={onClickDarkMode}>다크모드</button>
                </div>
                <div className="three">
                    {IsLogin ? (
                        <button onClick={onClickLogin}>로그인</button>
                    ) : (
                        <button onClick={onClickLogout}>로그아웃</button>
                    )}
                </div>
            </div>
        </div>
    )
}

