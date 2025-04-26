import React, { useState } from "react";
import ModalTodoItem from "./ModalTodoItem";

// 초기 틀 설정
export interface ModalTList {
    key: number;
    id: number;
    text: string;
    completed: boolean;
}

export default function ModalTodoList() {
    // 임시 테스트 데이터
    const [modalTodoList, setModalTodoList] = useState<ModalTList[]>([
        {
            key: 1,
            id: 1,
            text: '테스트1',
            completed: false,
        },
        {
            key: 2,
            id: 2,
            text: '테스트2',
            completed: false,
        }, {
            key: 3,
            id: 3,
            text: '테스트3',
            completed: false,
        },
        {
            key: 4,
            id: 4,
            text: '테스트4',
            completed: false,
        },
        {
            key: 5,
            id: 5,
            text: '테스트5',
            completed: false,
        }, {
            key: 6,
            id: 6,
            text: '테스트6',
            completed: false,
        },
    ]);

    const [expanded, setExpanded] = useState<boolean>(false);

    const visibleItems = expanded ? modalTodoList : modalTodoList.slice(0, 4);

    // modalTodoItem.tsx에서 전달 받은 인수 처리함수
    const textUpdatedHandler = (newModalItem: ModalTList): void => {
        const newItem = modalTodoList.map((item) => {
            if (item.id === newModalItem.id) {
                return newModalItem;
            } else {
                return item;
            }
        })
        setModalTodoList(newItem);
    }

    return (
        <div>
            {visibleItems.map((item) => (
                <ModalTodoItem
                    key={item.key}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                    onClickCompleted={textUpdatedHandler} />
            ))}
            {modalTodoList.length > 4 && (
                <button onClick={() => setExpanded(!expanded)} className="mt-2 text-blue-500 hover:underline">
                    {expanded ? "접기 🔼" : "더 보기 🔽"}
                </button>
            )}
        </div >
    )
}