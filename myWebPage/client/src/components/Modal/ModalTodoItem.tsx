import React from "react";
import styled from "styled-components";
import { TodoItem } from "./ModalTodoList";

interface ModalItemProps {
    id: string;
    text: string;
    completed: boolean;
    onClickCompleted: (updateModalTodoItem: TodoItem) => void;
}

const ListItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

const CompletedBtn = styled.button`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;


export default function ModalTodoItem({
    id,
    text,
    completed,
    onClickCompleted,
}: ModalItemProps) {
    // 완료 버튼 클릭 함수
    const handleCompleted = () => {
        const updatedItem = {
            id: id,
            text: text,
            completed: !completed,
        }
        onClickCompleted(updatedItem);
    }

    return (
        <ListItem key={id}>
            <CompletedBtn onClick={handleCompleted}>
                {completed ? "✅" : "⬜"}
            </CompletedBtn>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>
                {text}
            </p>
        </ListItem>
    );
}
