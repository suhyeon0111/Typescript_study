import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LuCircleUserRound } from 'react-icons/lu';
import { useNavigate, useLocation } from 'react-router-dom';

import CreateTodo from './CreateTodo';
import TodoItem from './TodoItem';
import Logo from '../../components/common/Logo';
import Today from '../../components/common/Today';


// 초기 틀 설정
export interface TList {
  id: string;
  text: string;
  completed: boolean;
}

const itemsPerPage = 6; // 한 페이지에 표시할 아이템 개수

function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "Guest";
  const today = new Date();  // 현재 날짜

  const params = new URLSearchParams(location.search);
  const dateFromQuery = params.get("date");

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (dateFromQuery) {
      setSelectedDate(new Date(dateFromQuery));
    } else {
      setSelectedDate(new Date());  // 오늘 날짜
    }
  }, [dateFromQuery]);

  // 날짜 커스텀
  const customDay = `${today?.getFullYear()}-${String(today?.getMonth() + 1).padStart(2, '0')}-${String(today?.getDate()).padStart(2, '0')}`;

  // 데이터 리스트
  const [todoList, setTodoList] = useState<TList[]>([
  ]);

  // 데이터 불러오기
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/todos?date=${customDay}`);
        setTodoList(response.data);
      } catch (error) {
        console.log("useEffect error>>>", error);
      }
    };

    // customDay가 null이면 렌더링 방지
    if (customDay) {
      fetchTodos();
    }
  }, [customDay]);

  // 확인용
  useEffect(() => {
    console.log("todoList>>>>", todoList);
  }, [todoList]);

  // 비동기 요청 후 상태 동기화
  const fetchTodos = async () => {
    const response = await axios.get(`http://localhost:3001/todos?date=${customDay}`);
    setTodoList(response.data);
  }


  // 삭제 함수
  const textDeleteHandler = async (id: string) => {
    const url = `http://localhost:3001/todos/${customDay}/${id}`;
    console.log("delete url>>>>>", url);

    try {
      await axios.delete(url);
      console.log("삭제 성공");
      setTodoList(todoList.filter((TodoItem) => TodoItem.id !== id));
    } catch (error) {
      console.error("delete error>>>", error);
      alert("삭제 실패");
    }
  };

  // 수정 함수
  const textUpdateHandler = async (newTodo: TList) => {
    try {
      await axios.put(`http://localhost:3001/todos/${customDay}/${newTodo.id}`, {
        text: newTodo.text,
        completed: newTodo.completed,
      });

      const newTodoList = todoList.map((item) =>
        item.id === newTodo.id ? newTodo : item
      );
      setTodoList(newTodoList);  // 위에서 새롭게 정의해준 리스트로 업데이트
    } catch (error) {
      console.error("update error>>>>", error);
      alert("수정실패");
    }
  };


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
      <Today Tday={customDay} />
      <div className='Container'>
        <CreateTodo Tday={customDay} refreshTodos={fetchTodos} />
        <div className='todoListContainer'>
          {selectedItems.map((item) => (
            <TodoItem
              key={item.id}
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
          <span>{currentPage} / {totalPages || 1} </span>
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
