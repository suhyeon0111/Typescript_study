import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MyPage() {
    const location = useLocation();
    const userName = location.state?.userName || "Guest";
    return (
        <div>{userName}</div>
    )
}