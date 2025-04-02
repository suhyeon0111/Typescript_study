import { useEffect, useState } from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { useNavigate, useLocation } from "react-router-dom";

export default function MyPage() {
    const location = useLocation();
    const userName = location.state?.userName || "Guest";
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const navigate = useNavigate();

    // userName 값이 바뀔 때마다 로그인 상태 업데이트
    useEffect(() => {
        if (userName === "Guset") {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [userName]);

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
                    <button>다크모드</button>
                </div>
                <div className="three">
                    {!isLogin ? (<button onClick={onClickLogout}>로그아웃</button>)
                        : (<button onClick={onClickLogin}>로그인</button>)}
                </div>
            </div>
        </div>
    )
}

