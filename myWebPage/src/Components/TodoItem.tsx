// 초기 틀 설정 (자식 컴포넌트에도 동일하게 틀 설정해줘야 함)
interface TodoItemProps {
    id: number
    text: string;
    completed: boolean;
    onClickDelete(id: number): void;
}

export default function TodoItem({ id, text, completed, onClickDelete }: TodoItemProps) {
    return (
        <li className='todoContainer'>
            {completed ? <button>완료됨</button> : <button>미완료</button>}
            <p> {text}</p>
            <div>
                <button >수정</button>
                <button onClick={() => onClickDelete(id)}>삭제</button>
            </div>
        </li>
    );
}