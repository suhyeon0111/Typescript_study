import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

import "../../styles/Logo.css";


const LogoButton = styled.button<{ open: boolean }>`
    width:130px;
    height: 70px;
    margin: 20px;
    background-color: ${({ theme }) => theme.bgColor};
    color: #6DAEDB;
    position: fixed;  // 화면기준으로 위치 고정
    z-index: 2;  // 다른 요소들 위로 올라오게
    top: 10px;
    left: 70px;
    transform: ${({ open }) => open ? 'translateX(120px)' : 'translateX(0)'};
    transition: transform 0.4s ease;
`


export default function Logo() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);  // 네비게이션바 상태 관리

    const handlerClickLogo = () => {
        navigate('/main');
    }

    // 햄버거 아이콘 클릭 시 네비게이션 바 열고 닫기
    const clickMenuHandler = () => {
        setIsOpen(!isOpen);
    }

    const goHomeHandler = () => {
        navigate('/main');
    }

    const goUserHandler = () => {
        navigate('/mypage');
    }

    const goCalendarHandler = () => {
        navigate('/calendar');
    }

    const goSettingHandler = () => {
        navigate('/setting');
    }


    return (
        <>
            <RxHamburgerMenu className={`menuIcon ${isOpen ? 'open' : ''}`} size={40}
                onClick={clickMenuHandler} />

            {/* 네비게이션 바 */}
            <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={goHomeHandler}>home</li>
                    <li onClick={goUserHandler}>user</li>
                    <li onClick={goCalendarHandler}>calendar</li>
                    <li onClick={goSettingHandler}>setting</li>
                </ul>
            </div>

            <LogoButton open={isOpen} onClick={handlerClickLogo} >
                <h1>Todo</h1>
            </LogoButton>
        </>
    )
}
