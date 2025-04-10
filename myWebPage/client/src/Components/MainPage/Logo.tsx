import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Logo() {
    const navigate = useNavigate();

    const LogoButton = styled.button`
        color: #6DAEDB;
        position: fixed;  // 화면기준으로 위치 고정
        z-index: 999;  // 다른 요소들 위로 올라오게
        top: -20px;
        left: 20px;
    `
    const handlerClickLogo = () => {
        navigate('/');
    }


    return (
        <LogoButton onClick={handlerClickLogo} style={{ backgroundColor: "#FFFFFF" }}>
            <h1>Todo</h1>
        </LogoButton>
    )
}
