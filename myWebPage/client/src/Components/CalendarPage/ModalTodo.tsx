import React from "react";

import "../../styles/ModalTodo.css";


export default function ModalTodo({ onClose }: { onClose: () => void }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>📝 일정 추가</h2>
                <p>여기에 내용을 작성하세요!</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    )
}