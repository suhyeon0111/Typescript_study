import React, { useState } from "react";
import { ModalTList } from "./ModalTodoList";


interface ModalItemProps {
    key: number;
    text: string;
    completed: boolean;
    onClickCompletedUpdate(updateModalTodoItem: ModalTList): void;
}

export default function ModalTodoItem({
    key,
    text,
    completed,
    onClickCompletedUpdate }: ModalItemProps) {

    // 완료 버튼 클릭 함수
    const handleComplete = () => {
        const updateModalTodoItem = {
            key: key,
            text: text,
            completed: !completed
        }
        onClickCompletedUpdate(updateModalTodoItem);
    }

    return (
        <div key={key}>
            <button className="Button_complete" onClick={handleComplete}>
                {completed ? "✅" : "  "}
            </button>
            <p style={completed ? { textDecoration: "line-through" } : undefined}> {text}</p>
        </div>
    )
}