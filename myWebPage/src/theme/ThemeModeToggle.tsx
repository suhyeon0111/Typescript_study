import React from "react";
import useThemeToggleStore from "../stores/useThemeToggleStore";

const ThemeModeToggle = () => {
    const { themeMode, setThemeMode } = useThemeToggleStore();

    const onChangeToggle = (): void => {
        setThemeMode(!themeMode)
        window.localStorage.setItem("theme", `${!themeMode}`);
    }

    return (
        <div>
            <button onClick={onChangeToggle}>
                다크모드
            </button>
        </div>
    )
}
export default ThemeModeToggle;