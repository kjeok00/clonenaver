import React from "react";
import SampleImage from "../resources/shopping.png"

const SecondSide = () => {
    const product = [
        {
            id: 1,
            image: SampleImage,
            title: "[뉴발란스] UNI 액티브 롱패딩"
        },
        {
            id: 2,
            image: SampleImage,
            title: "폴로 랄프로렌 보이즈 데님 셔츠"
        },
        {
            id: 3,
            image: SampleImage,
            title: "CP컴퍼니 렌즈와펜 클래식 남"
        }
    ]

    return (
        <div className="p-4 rounded-lg border-2">
            <div className="flex items-center space-x-6">
                {/* 텍스트 */}
                <div className="text-xl font-semibold flex flex-col">
                    <span>요즘</span>
                    <span>많이 찾는</span>
                    <span>아이템</span>
                </div>
                {/* 상품 리스트 */}
                <div className="flex space-x-4">
                    {product.map((product) => (
                        <div key={product.id} className="flex flex-col items-center text-center">
                            <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded-md shadow-lg" />
                            <span className="text-sm mt-2 w-24">{product.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecondSide;