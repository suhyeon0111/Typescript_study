import React from "react";
import styled from "styled-components";


interface ModalItemProps {
    id: string;
    text: string;
    completed: boolean;
    onClickCompleted: () => void;
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

    return (
        <ListItem key={id}>
            <CompletedBtn onClick={onClickCompleted}>
                {completed ? "✅" : "⬜"}
            </CompletedBtn>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>
                {text}
            </p>
        </ListItem>
    );
}
