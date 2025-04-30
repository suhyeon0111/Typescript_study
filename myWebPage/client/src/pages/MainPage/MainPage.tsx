import React, { useState } from 'react';
import { LuCircleUserRound } from 'react-icons/lu';
import { useNavigate, useLocation } from 'react-router-dom';

import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
import Logo from '../../components/common/Logo';
import Today from '../../components/common/Today';


// 초기 틀 설정
export interface TList {
  id: number;
  key: number;
  text: string;
  completed: boolean;
}

const itemsPerPage = 6; // 한 페이지에 표시할 아이템 개수

function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "Guest";

  const today = new Date();  // 현재 날짜
  // 날짜 커스텀
  const formattedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // 가상데이터 리스트
  const [todoList, setTodoList] = useState<TList[]>([
  ]);

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
    setTodoList(newTodoList)  // 위에서 새롭게 정의해준 리스트로 업데이트
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
      <Logo />
      < LuCircleUserRound className='UserIcon' onClick={onClickIcon} />
      <div className='Container'>
        <Today Tday={formattedDate} />
        <CreateTodo Tday={formattedDate} />
        <div className='todoListContainer'>
          {selectedItems.map((item) => (
            <TodoItem
              id={item.id}
              key={item.key}
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

export default MainPage;
