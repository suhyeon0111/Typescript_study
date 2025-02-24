import { useState } from 'react';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

// 초기 틀 설정
interface TList {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  // 입력값 관리
  const [inputText, setInputText] = useState("");
  // 가상데이터 리스트
  const [todoList, setTodoList] = useState<TList[]>([
    {
      id: 1,
      text: '할 일1',
      completed: false,
    },
    {
      id: 2,
      text: '할 일2',
      completed: false,
    }
  ]);

  // 입력값 변경
  const textInputTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }
  // 입력 확인
  const textInputHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: TList = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
  }

  return (
    <div>
      <CreateTodo onChange={textInputTypingHandler} onSubmit={textInputHandler} inputText={inputText} />
      <div className='App'>
        {todoList.map((item) => (
          <TodoItem key={item.id} text={item.text} completed={item.completed} />
        ))}
      </div>
    </div>
  )
}

export default TodoList;
