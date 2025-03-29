import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';

import TodoList from './Components/MainPage/TodoList';
import RegisterPage from './Components/MyPage/RegisterPage';
import LoginPage from './Components/MyPage/LoginPage';
import MyPage from './Components/MyPage/MyPage';
import { GlobalStyle } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './theme/theme';
import useThemeToggleStore from './stores/useThemeToggleStore';


function App() {

  const { themeMode, setThemeMode } = useThemeToggleStore();

  useEffect(() => {
    const localTheme: string | null = window.localStorage.getItem("theme");
    if (localTheme === 'false') {
      setThemeMode(false);
    } else {
      setThemeMode(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;

