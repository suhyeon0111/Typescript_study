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
    const [updateText, setUpdateText] = useState<string>('');

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
                        {/* {completed ? <button>완료됨</button> : <button>미완료</button>} */}
                        <button className="Button_complete" onClick={handleComplete}>
                            {completed ? "완료됨" : ""}
                        </button>
                        <p style={completed ? { textDecoration: "line-through" } : undefined}> {text}</p>
                        <div>
                            <button className="Button_submit" onClick={() => setIsUpdating(true)}>수정</button>
                            <button className="Button_submit" onClick={() => onClickDelete(id)}>삭제</button>
                        </div>
                    </li>
                ) : (
                    <li className='todoContainer'>
                        <form onSubmit={handleFormSubmit}>
                            <input type="text" className="Input_update" value={updateText} onChange={handleInputChange} />
                            <div>
                                <button className="Button_submit" type="submit">확인</button>
                                <button className="Button_submit" onClick={() => setIsUpdating(false)}>취소</button>
                            </div>
                        </form>
                    </li>
                )
            }
        </div>
    );
}