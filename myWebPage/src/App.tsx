import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './Components/MainPage/TodoList';
import RegisterPage from './Components/MyPage/RegisterPage';
import LoginPage from './Components/MyPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

