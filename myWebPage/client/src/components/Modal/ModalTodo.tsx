import React from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "../../styles/ModalTodo.css";
import ModalTodoList from "./ModalTodoList";


interface ModalProps {
    onClose: () => void;
    onDay: Date;
}

export default function ModalTodo({
    onClose, onDay
}: ModalProps) {
    const strDay = `${onDay?.getFullYear()}-${String(onDay?.getMonth() + 1).padStart(2, '0')}-${String(onDay?.getDate()).padStart(2, '0')}`;

    const navigate = useNavigate();
    const GoMainPageHandler = () => {
        navigate('/');
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <CgArrowsExpandLeft onClick={GoMainPageHandler} />
                {/* jsx에서는 date객체자체를 렌더링 할 수 없으므로 문자열로 변환하여 사용해야함 */}
                <p>{strDay}</p>
                <h2>📝 일정 추가</h2>
                <ModalTodoList onDay={strDay} />
            </div>
        </div>
    )
}