import React from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";

import "../../styles/ModalTodo.css";


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
                <p>여기에 내용을 작성하세요!</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    )
}