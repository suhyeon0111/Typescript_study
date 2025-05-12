import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainPage from './pages/MainPage/MainPage';
import RegisterPage from './pages/MyPage/RegisterPage';
import LoginPage from './pages/MyPage/LoginPage';
import MyPage from './pages/MyPage/MyPage';
import { GlobalStyle } from './styles/GlogalStyles';
import useThemeToggleStore from './stores/useThemeToggleStore';
import { darkTheme, lightTheme } from './styles/Theme';
import SettingPage from './pages/SettingPage//SettingPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';


function App() {
  const { themeMode } = useThemeToggleStore();

  return (
    <>
      <ThemeProvider theme={themeMode ? darkTheme : lightTheme} >
        <GlobalStyle />
        <Routes>
          <Route path='/main' element={<MainPage />} />
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

