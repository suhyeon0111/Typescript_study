import { useState } from 'react';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';

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
  const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  // 삭제 함수
  const textDeleteHandler = (id: number) => {
    setTodoList(todoList.filter((TodoItem) => TodoItem.id !== id));
  };

  // 수정 함수
  const textUpdateHandler = (newTodo: TList): void => {
    const newTodoList = todoList.map((item) => {
      if (item.id === newTodo.id) {
        return newTodo;
      }
      else {
        return item;
      }
    })
    // 위에서 새롭게 정의해준 리스트로 업데이트
    setTodoList(newTodoList)
  }

  return (
    <div>
      <CreateTodo onChange={textTypingHandler} onSubmit={textInputHandler} inputText={inputText} />
      <div className='App'>
        {todoList.map((item) => (
          <TodoItem
            id={item.id}
            text={item.text}
            completed={item.completed}
            onClickDelete={textDeleteHandler}
            onClickUpdate={textUpdateHandler} />
        ))}
      </div>
    </div>
  )
}

export default TodoList;
