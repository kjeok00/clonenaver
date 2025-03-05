import react from "react";
import SampleImage from "../resources/shopping.png";

const ThirdSide = () => {
    return (
        <div className="mx-4 my-4 border-2 rounded-lg">
            <div className="flex justify-between border-b-2 items-center mx-4">
                <span className="text-black font-bold mx-4 my-4">날씨</span>
                <span className="text-gray-500 mx-4">제주시 이도일동</span>
            </div>

            <img
                src={SampleImage} alt="날씨" className="flex justify-center mx-4"
            />
        </div>
    );
};

export default ThirdSide;