import react from "react";
import SampleImage from "../resources/shopping.png";

const ThirdSide = () => {
    return (
        <div className="border-2 rounded-lg flex flex-col">
            {/* 헤더 (날씨 정보) */}
            <div className="flex justify-between border-b-2 p-2 mx-2">
                <span className="text-black font-bold">날씨</span>
                <span className="text-gray-500">제주시 이도일동</span>
            </div>

            {/* 이미지만 가운데 정렬 */}
                <img
                    src={SampleImage} alt="날씨"
                    className="w-full px-2 h-28"
                />
            </div>
    );
};

export default ThirdSide;