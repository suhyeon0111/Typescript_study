import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './MyPage.css';


const API_URL = "http://localhost:3001"; // 백엔드 URL

interface User {
    memId: string,
    memPw: string,
}

export default function LoginPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        id: "",
        password: "",
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLogin((prev) => ({ ...prev, [name]: value }));
    }

    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 필드 입력 확인
        if (!login.id || !login.password) {
            alert("모든 필드를 입력하세요");
            return;
        }

        try {
            const response = await axios.get(`${API_URL}/login`);
            const responseData = response.data;
            // console.log("response>> ", response.data);
            // 일치하는 회원정보 찾기
            const result = responseData.find((responseData: User) =>
                responseData.memId === login.id && responseData.memPw === login.password);

            // 일치하는 회원정보 없을 때
            if (!result) {
                alert("일치하는 회원정보가 없습니다.");
            } else {
                console.log("result.memName>>>", result.memName);  // 회원 이름
                navigate('/', { state: { userName: result.memName } });  // 회원정보 넘기기
            }
        } catch (error) {
            console.log("error>> ", error);
            alert("로그인 에러 발생")
        }
    }


    return (
        <div className="RegisterContainer">
            <div>
                <form onSubmit={handleLoginSubmit}>
                    <h1>로그인</h1>
                    <div className="RegisterBox">
                        <input type="text"
                            name="id"
                            value={login.id}
                            onChange={handleInputChange}
                            placeholder="아이디" />
                        <input type="password"
                            name="password"
                            value={login.password}
                            onChange={handleInputChange}
                            placeholder="비밀번호(8~16자의 영문, 숫자, 특수기호)" />
                    </div>
                    <button type="submit">로그인</button>
                    <button type="button" onClick={() => navigate('/register')}>회원가입</button>
                </form>
            </div>
        </div>
    )
}