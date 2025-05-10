import React, { useState, useEffect } from "react";
import ModalTodoItem from "./ModalTodoItem";
import { getTodo } from "../../api/getTodo";


interface ModalTodoListProps {
    onDay: string;
}
export interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}

export default function ModalTodoList({ onDay }: ModalTodoListProps) {
    const [modalTodoList, setModalTodoList] = useState<TodoItem[]>([]);
    const [expanded, setExpanded] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const fetchData = await getTodo(onDay);
                setModalTodoList(fetchData);
                console.log("fetchData>>>> ", fetchData);
            } catch (error) {
                alert("할일 불러오기 실패");
                console.log("get todo error>>> ", error);
            }
        };
        getData();
    }, [onDay]);

    const visibleItems = expanded ? modalTodoList : modalTodoList.slice(0, 4);

    const toggleCompleted = (id: string) => {
        const updatedList = modalTodoList.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        setModalTodoList(updatedList);
    };

    return (
        <div>
            {visibleItems.map((item) => (
                <ModalTodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    completed={item.completed}
                    onClickCompleted={() => toggleCompleted(item.id)}
                />
            ))}
            {modalTodoList.length > 4 && (
                <button onClick={() => setExpanded(!expanded)} className="mt-2 text-blue-500 hover:underline">
                    {expanded ? "접기 🔼" : "더 보기 🔽"}
                </button>
            )}
        </div>
    );
}
