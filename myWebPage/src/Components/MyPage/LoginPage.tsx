import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './MyPage.css';

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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // id 유효성 검사
        const regexId = /^[a-zA-Z][a-zA-Z0-9]{4,14}$/;
        if (!regexId.test(login.id)) {
            alert("영어, 숫자를 포함한 5자 이상 13자 미만으로 입력해주세요.");
        }
        // 비밀번호 유효성 검사
        const regexPw = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,15}$/;
        if (!regexPw.test(login.password)) {
            alert("영문, 숫자, 특수기호를 포함하여 8자 이상 16자 미만으로 입력해주세요.");
        }
        // 필드 입력 확인
        if (!login.id || !login.password) {
            alert("모든 필드를 입력하세요");
            return;
        }
        console.log("회원가입 성공", login);
        navigate("/");
    }


    return (
        <div className="loginContainer">
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>로그인</h1>
                    <div>
                        <input type="text"
                            name="id"
                            value={login.id}
                            onChange={handleInputChange}
                            placeholder="아이디" />
                        <input type="text"
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