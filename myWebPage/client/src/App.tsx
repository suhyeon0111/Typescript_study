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
import SettingPage from './Components/SettingPage//SettingPage';
import CalendarPage from './Components/CalendarPage/CalendarPage';


function App() {
  const { themeMode } = useThemeToggleStore();

  return (
    <>
      <ThemeProvider theme={themeMode ? darkTheme : lightTheme} >
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/setting' element={<SettingPage />} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App;

