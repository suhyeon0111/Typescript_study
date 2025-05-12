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
    key,
    id,
    text,
    completed,
    onClickCompleted,
}: ModalItemProps) {


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