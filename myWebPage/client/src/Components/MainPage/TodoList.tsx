import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
import { LuCircleUserRound } from 'react-icons/lu';
import { useNavigate, useLocation } from 'react-router-dom';

// 초기 틀 설정
interface TList {
  id: number;
  text: string;
  completed: boolean;
}

const itemsPerPage = 6; // 한 페이지에 표시할 아이템 개수

function TodoList() {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "Guest";

  useEffect(() => {
    axios.get("http://localhost:3001/login")
      .then(response => {
        console.log("response>>> ", response.data)
      })
      .catch(error => { console.error(error) })
  }, [])


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
    if (!inputText.trim()) {
      alert("입력되지 않았습니다.");
    } else {
      event.preventDefault();
      const newTodo: TList = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTodoList([...todoList, newTodo]);
      setInputText("");
    }
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

  // 페이지 관리
  const [currentPage, setCurrentPage] = useState(1);
  // 페이지함수
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = todoList.slice(startIndex, startIndex + itemsPerPage);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(todoList.length / itemsPerPage);

  // user 아이콘 클릭 시 마이페이지 이동
  const onClickIcon = () => {
    navigate('/mypage', { state: { userName: userName } })
  }

  return (
    <div className='App'>
      < LuCircleUserRound className='UserIcon' onClick={onClickIcon} />
      <div className='Container'>
        <CreateTodo onChange={textTypingHandler} onSubmit={textInputHandler} inputText={inputText} />
        <div className='todoListContainer'>
          {selectedItems.map((item) => (
            <TodoItem
              id={item.id}
              text={item.text}
              completed={item.completed}
              onClickDelete={textDeleteHandler}
              onClickUpdate={textUpdateHandler} />
          ))}
        </div>
        {/* 페이지 버튼 */}
        <div className='PageContainer'>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            이전
          </button>
          <span>{currentPage} / {totalPages} </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}>
            다음
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoList;
