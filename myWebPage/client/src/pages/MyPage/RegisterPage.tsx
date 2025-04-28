import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/MyPage.css';
import axios from "axios";
import React from "react";
import Logo from "../../components/common/Logo";


const API_URL = "http://localhost:3001";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [register, setRegister] = useState({
        userName: "",
        id: "",
        password: "",
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegister((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // id 유효성 검사
        const regexId = /^[a-zA-Z][a-zA-Z0-9]{4,14}$/;
        if (!regexId.test(register.id)) {
            alert("영어, 숫자를 포함한 5자 이상 13자 미만으로 입력해주세요.");
            return;
        }
        // 비밀번호 유효성 검사
        const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,15}$/;
        if (!regexPw.test(register.password)) {
            alert("영문, 숫자, 특수기호를 포함하여 8자 이상 16자 미만으로 입력해주세요.");
            return;
        }
        // 필드 입력 확인
        if (!register.userName || !register.id || !register.password) {
            alert("모든 필드를 입력하세요");
            return;
        }
        try {
            const response = await axios.post(`${API_URL}/login`,
                {
                    memName: register.userName,
                    memId: register.id,
                    memPw: register.password
                });
            console.log("회원가입 성공 response>>>", response);
            alert("환영합니다!");
            navigate("/", { state: { userName: register.userName } });
        } catch (error) {
            console.log("error>>> ", error);
        }
    }


    return (
        <div className="RegisterContainer">
            <Logo />
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>회원가입</h1>
                    <div className="RegisterBox">
                        <input type="text"
                            name="id"
                            value={register.id}
                            onChange={handleInputChange}
                            placeholder="아이디" />
                        <input type="password"
                            name="password"
                            value={register.password}
                            onChange={handleInputChange}
                            placeholder="비밀번호(8~16자의 영문, 숫자, 특수기호)" />
                        <input type="text"
                            name="userName"
                            value={register.userName}
                            onChange={handleInputChange}
                            placeholder="이름" />
                    </div>
                    <button type="submit">회원가입</button>
                    <button type="button" onClick={() => navigate('/login')}>로그인</button>
                </form>
            </div>
        </div>
    )
}