import React, { useState } from "react";

// TodoList에서 받아올 데이터 틀 선언
interface InputTextProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  inputText: string;
}

export default function CreateTodo({
  onChange,
  onSubmit,
  inputText
}: InputTextProps) {
  return (
    <div>
      <form onSubmit={(event) => onSubmit(event)}>
        <input onChange={(e) => onChange(e)} type="text" value={inputText} placeholder="입력하세요" />
        <button type="submit">등록</button>
      </form>
    </div>

  )
}

