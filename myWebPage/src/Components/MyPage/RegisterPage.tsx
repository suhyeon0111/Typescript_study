import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './MyPage.css';

export default function MyPage() {
    const navigate = useNavigate();

    const [register, setRegister] = useState({
        name: "",
        id: "",
        password: "",
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegister((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!register.name || !register.id || !register.password) {
            alert("모든 필드를 입력하세요");
            return;
        }
        console.log("회원가입 성공", register);
        navigate("/");
    }


    return (
        <div className="RegisterContainer">
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>회원가입</h1>
                    <div>
                        <input type="text"
                            name="id"
                            value={register.id}
                            onChange={handleInputChange}
                            placeholder="아이디" />
                        <input type="text"
                            name="password"
                            value={register.password}
                            onChange={handleInputChange}
                            placeholder="비밀번호(8~16자의 영문, 숫자, 특수기호)" />
                        <input type="text"
                            name="name"
                            value={register.name}
                            onChange={handleInputChange}
                            placeholder="이름" />
                    </div>
                    <button type="submit">회원가입</button>
                </form>

            </div>
        </div>
    )
}