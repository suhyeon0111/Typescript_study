import React from "react";
import styled from "styled-components";
import { ModalTList } from "./ModalTodoList";

interface ModalItemProps {
    key: number;
    id: number;
    text: string;
    completed: boolean;
    onClickCompleted(updateModalTodoItem: ModalTList): void;
}

export default function ModalTodoItem({
    key,
    id,
    text,
    completed,
    onClickCompleted }: ModalItemProps) {

    const ListItem = styled.li`
            list-style: none;
            display: flex;
        `

    const CompletedBtn = styled.button`
        width: 40px;
        height: 40px;
        margin-right: 10px;
    `

    // 완료 버튼 클릭 함수
    const handleCompleted = () => {
        const updatedItem = {
            key: key,
            id: id,
            text: text,
            completed: !completed,
        }
        onClickCompleted(updatedItem);
    }

    return (
        <ListItem>
            <CompletedBtn onClick={handleCompleted}>
                {completed ? "✅" : " "}
            </CompletedBtn>
            <p style={{
                textDecoration: completed ? "line-through" : undefined,
                marginTop: "25px"
            }}> {text}</p>
        </ListItem>
    )
}