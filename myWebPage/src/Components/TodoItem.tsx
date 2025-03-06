import React, { useState } from "react";
import { TList } from "./TodoList";
import "./TodoStyle.css";

// 초기 틀 설정 (자식 컴포넌트에도 동일하게 틀 설정해줘야 함)
interface TodoItemProps {
    id: number
    text: string;
    completed: boolean;
    onClickDelete(id: number): void;
    onClickUpdate(updateTodoItem: TList): void;
}

export default function TodoItem({
    id,
    text,
    completed,
    onClickDelete,
    onClickUpdate }: TodoItemProps) {

    // 수정 여부
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [updateText, setUpdateText] = useState<string>(text);

    //실시간 수정
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateText(event.target.value);
    }
    // 수정 완료
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const updatedTodoItem = {
            id: id,
            text: updateText,
            completed: completed,
        };
        onClickUpdate(updatedTodoItem);
        setIsUpdating(false);
    }
    // todo 완료 관리 함수
    const handleComplete = () => {
        const updatedTodoItem = {
            id: id,
            text: text,
            completed: !completed,
        }
        onClickUpdate(updatedTodoItem);
    }
    return (
        <div>
            {
                !isUpdating ? (
                    <li className='todoContainer'>
                        <button className="Button_complete" onClick={handleComplete}>
                            {completed ? "✅" : "  "}
                        </button>
                        <p style={completed ? { textDecoration: "line-through" } : undefined}> {text}</p>
                        <div>
                            <button onClick={() => setIsUpdating(true)}>수정</button>
                            <button onClick={() => onClickDelete(id)}>삭제</button>
                        </div>
                    </li>
                ) : (
                    <li className='todoContainer'>
                        <form onSubmit={handleFormSubmit}>
                            <input className="Input_update" type="text" value={updateText} onChange={handleInputChange} />
                            <div className="UpdateContainer">
                                <button type="submit">확인</button>
                                <button onClick={() => setIsUpdating(false)}>취소</button>
                            </div>
                        </form>
                    </li>
                )
            }
        </div>
    );
}