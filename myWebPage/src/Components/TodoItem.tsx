// 초기 틀 설정 (자식 컴포넌트에도 동일하게 틀 설정해줘야 함)
interface TodoItemProps {
    text: string;
    completed: boolean;
}

export default function TodoItem({text, completed}: TodoItemProps) {

    return (
        <li className='todoContainer'>
          {completed ? <button>완료됨</button> : <button>미완료</button>}
          <p> {text}</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
    );
}