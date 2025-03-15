import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './MyPage.css';

const API_URL = "http://localhost:3001"; // 백엔드 URL

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
            const response = await axios.get(
                `${API_URL}/login`
            );
            console.log("response >> ", response.data);
        } catch (error) {
            alert("에러 발생")
            console.log("error>> ", error);
        }


        // console.log("로그인 성공", login);
        // navigate("/");
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
                </form>

            </div>
        </div>
    )
}