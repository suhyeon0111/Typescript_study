import React from "react";
// import { CiLight, CiDark } from "react-icons/ci";

import useThemeToggleStore from "../../stores/useThemeToggleStore";
import Logo from "../../components/common/Logo";


export default function SettingPage() {
    // const [isDark, setIsDark] = useState<boolean>(false);
    const { themeMode, setThemeMode } = useThemeToggleStore();

    return (
        <>
            <Logo />
            <div className="MyPageContainer">
                <div>
                    <div className="two">
                        <button onClick={() => setThemeMode(!themeMode)}>
                            {themeMode ? '다크모드' : '라이트모드'}
                        </button>
                        {/* {!isDark ? (
                        <button> <CiDark />다크모드</button>
                        ) : (
                            <button> <CiLight />라이트모드</button>
                            )} */}
                        <div className="min-h-screen flex items-center justify-center bg-green-100">
                            <h1 className="text-3xl font-bold text-blue-500">Tailwind 잘 작동 중!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

