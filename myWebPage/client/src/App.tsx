import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import TodoList from './Components/MainPage/TodoList';
import RegisterPage from './Components/MyPage/RegisterPage';
import LoginPage from './Components/MyPage/LoginPage';
import MyPage from './Components/MyPage/MyPage';
import { GlobalStyle } from './styles/GlogalStyles';
import useThemeToggleStore from './stores/useThemeToggleStore';
import { darkTheme, lightTheme } from './styles/Theme';


function App() {
  const { themeMode, setThemeMode } = useThemeToggleStore();

  return (
    <>
      <ThemeProvider theme={themeMode ? darkTheme : lightTheme} >
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App;

