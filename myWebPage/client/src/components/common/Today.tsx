import React from "react";


export default function Today({ Tday }: { Tday: string }) {
    return (
        <>
            <h2
                style={{
                    "position": "absolute"
                    , "top": "20px"
                }}>{Tday}</h2>
        </>
    );
}

