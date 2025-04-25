import React from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";

import "../../styles/ModalTodo.css";
import ModalTodoList from "./ModalTodoList";


interface ModalProps {
    onClose: () => void;
    onDay: Date;
}

export default function ModalTodo({
    onClose, onDay
}: ModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <CgArrowsExpandLeft />
                {/* jsx에서는 date객체자체를 렌더링 할 수 없으므로 문자열로 변환하여 사용해야함 */}
                <p>{onDay.toDateString()}</p>
                <h2>📝 일정 추가</h2>
                <ModalTodoList />
            </div>
        </div>
    )
}