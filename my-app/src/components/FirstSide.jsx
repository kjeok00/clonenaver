import react from "react";

const FirstSide = () => {
    return (
        <div className="bg-white border-2 px-4 flex rounded-lg">
            <div className="bg-red-500 text-white font-extrabold text-sm rounded-lg px-2 my-2 flex justify-center items-center">기상특보</div>
            <div className="text-black font-bold px-2 my-2 flex justify-center items-center">제주도북부중산간 강풍주의보</div>
        </div>
    );
};

export default FirstSide