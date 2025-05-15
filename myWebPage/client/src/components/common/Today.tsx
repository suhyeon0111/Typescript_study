import React from "react";


export default function Today({ Tday }: { Tday: string }) {
    return (
        <>
            <h2 className="absolute top-10 text-3xl font-bold text-skyblue">{Tday}</h2>
        </>
    );
}
{/* <h2
    style={{
        "position": "absolute"
        , "top": "20px"
    }}>{Tday}</h2> */}