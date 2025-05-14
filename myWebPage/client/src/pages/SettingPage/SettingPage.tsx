import React from "react";
// import { CiLight, CiDark } from "react-icons/ci";

import useThemeToggleStore from "../../stores/useThemeToggleStore";
import Logo from "../../components/common/Logo";


export default function MyPage() {
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
                    </div>
                </div>
            </div>
        </>
    )
}

