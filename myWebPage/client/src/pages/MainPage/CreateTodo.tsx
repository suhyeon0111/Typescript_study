import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "../../styles/TodoStyle.css";
import { addTodo } from "../../api/addTodo";


export default function CreateTodo({
  Tday,
  refreshTodos }: {
    Tday: string,
    refreshTodos: () => void
  }) {

  // 입력값 관리
  const [inputText, setInputText] = useState<string>("");

  // 폼 제출함수
  const submitInputHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) {
      alert("입력되지 않았습니다.");
      return;
    }

    try {
      const newTodo = await addTodo(
        {
          date: Tday,
          id: uuidv4(),
          text: inputText,
          completed: false
        }
      );
      console.log("Todo added>>>>", newTodo);
      setInputText('');
      refreshTodos();
    } catch {
      alert("할 일 추가에 실패했습니다.");
    }
  }

  return (
    <div className="todoCreateContainer">
      <form onSubmit={submitInputHandler}>
        <input className="Input_create"
          onChange={e => setInputText(e.target.value)}
          value={inputText}
          type="text"
          placeholder="입력하세요" />
        <button type="submit" className="Button_submit">등록</button>
      </form>
    </div>

  )
}

