import react from "react";
import SampleImage from "../resources/shopping.png";

const ForthSide = () => {
    const product = [
        {
            id: 1,
            title: "한화오션",
            percentage: "14.27%",
            price: 84900,
        },
        {
            id: 2,
            title: "삼성전자",
            percentage: "0.28%",
            price: 54650,
        },
        {
            id: 3,
            title: "한화",
            percentage: "16.16%",
            price: 690000
        }
    ]

    return (
        <div className="rounded-lg border-2 ">
            <div className="flex justify-between mx-4 py-2 border-b-2">
                <span className="text-black font-bold">증시</span>
                <span className="text-gray-600 font-normal">03.04. 15:07 🔃</span>
            </div>

            <div className="flex px-4">
                <img
                    src={SampleImage} alt="증시" className="w-1/2"
                />
                <div className="flex flex-col mx-2 my-2 justify-center">
                    {product.map((product) => (
                        <div key={product.id} className="flex flex-col border-b-2">
                            <div className="flex justify-between items-center space-x-1 py-1">
                                <span className="font-bold text-gray-500 text-xs items">{product.title}</span>
                                <div>
                                    <span className="text-red-500 text-xs font-semibold mr-2">{product.percentage}</span>
                                    <span className="text-balck font-semibold text-xs">{product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <span className="text-gray-500 flex justify-start border-b-2 py-1">인기종목 더보기</span>
                </div>
            </div>
        </div>
    );
};

export default ForthSide