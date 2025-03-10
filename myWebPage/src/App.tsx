import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './Components/MainPage/TodoList';
import RegisterPage from './Components/MyPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

