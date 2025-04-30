import React from "react";


export default function Today({ Tday }: { Tday: Date | null }) {
    const customDay = `${Tday?.getFullYear()}-${Tday?.getMonth()}-${Tday?.getDate()}`;
    return (
        <>
            <p>{customDay}</p>
        </>
    );
}