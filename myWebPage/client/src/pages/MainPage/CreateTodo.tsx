import React, { useState } from "react";

import "../../styles/TodoStyle.css";
import { TList } from "./TodoList";

// TodoList에서 받아올 데이터 틀 선언
// interface InputTextProps {
//   onSubmit(event: React.FormEvent<HTMLFormElement>): void;
// }

export default function CreateTodo() {

  // 입력값 관리
  const [inputText, setInputText] = useState<string>("");

  // 입력 관리 함수
  const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const submitInputHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (!inputText.trim()) {
      alert("입력되지 않았습니다.");
    } else {
      e.preventDefault();
      const newTodo: TList = {
        id: Date.now(),
        key: Date.now(),
        text: inputText,
        completed: false,
      };

    }
  }

  return (
    <div className="todoCreateContainer">
      <form onSubmit={submitInputHandler}>
        <input className="Input_create" onChange={textTypingHandler} type="text" value={inputText} placeholder="입력하세요" />
        <button type="submit" className="Button_submit">등록</button>
      </form>
    </div>

  )
}

