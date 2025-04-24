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
            text: '아르바이트',
            completed: false,
        },
        {
            key: 2,
            id: 2,
            text: '청소',
            completed: false,
        }, {
            key: 3,
            id: 3,
            text: '운동',
            completed: false,
        }
    ]);

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
            {modalTodoList.map((item) => (
                <ModalTodoItem
                    key={item.key}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                    onClickCompleted={textUpdatedHandler} />
            ))
            }
        </div>
    )
}