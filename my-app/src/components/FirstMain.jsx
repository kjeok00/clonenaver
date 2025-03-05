import React from "react";
import SampleImage from "../resources/shopping.png";

const FirstMain = () => {
    const menuItems = [
        "뉴스스텐드",
        "언론사편집",
        "엔터",
        "스포츠",
        "경제",
        "쇼핑투데이",
    ];

    const products = [
        {
            id: 1,
            image: SampleImage,
            title: "굳어있던 종아리 알, 완전 박살",
            price: "89,000",
            originalPrice: "199,000",
            brand: "휴그랩",
            discount: "55%",
        },
        {
            id: 2,
            image: SampleImage,
            title: "탄력 넘치는 피부를 위한 마사지기",
            price: "120,000",
            originalPrice: "200,000",
            brand: "뷰티랩",
            discount: "40%",
        },
        {
            id: 3,
            image: SampleImage,
            title: "집에서 간편하게 다이어트!",
            price: "75,000",
            originalPrice: "100,000",
            brand: "핏라이프",
            discount: "30%",
        },
        {
            id: 4,
            image: SampleImage,
            title: "피로 회복을 위한 전신 안마기",
            price: "150,000",
            originalPrice: "300,000",
            brand: "힐링케어",
            discount: "60%",
        },
    ];


    return (
        <div className="w-[600px] h-[550px] bg-white border-2 mx-auto overflow-hidden px-4 rounded-lg">
            {/* 메뉴 */}
            <ul className="flex justify-start space-x-3 py-2 text-gray-700 text-sm">
                {menuItems.map((item, index) => (
                    <li key={index} className="hover:text-black-600 cursor-pointer">
                        {item}
                    </li>
                ))}
            </ul>

            {/* 쇼핑 배너 */}
            <div className="bg-gray-100 text-black p-4 rounded-md shadow-md flex justify-between items-center">
                <div className="text-sm flex space-x-4">
                    <span>리빙러빙 데이 가전</span>
                    <span className="text-gray-200">|</span>
                    <span>이사&혼수 시즌 맞이 가전 인기브랜드 BIG SALE</span>
                </div>
                <div className="text-lg font-semibold">마이쇼핑</div>
            </div>

            {/* 상품 목록 */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-32 h-32 object-cover mx-auto shadow-lg"
                        />
                        <div className="flex flex-col items-center text-center mt-2">
                            <span className="text-sm font-bold">{product.title}</span>
                            <span className="text-red-500 text-sm font-semibold">
                                {product.discount}
                                <span className="text-black text-sm font-semibold ml-2">
                                    {product.price}원</span>
                                <span className="text-gray-400 text-xs line-through ml-2">
                                    {product.originalPrice}원
                                </span>
                            </span>
                            <span className="text-gray-600 text-xs">{product.brand}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* 쇼핑투데이 */}
            <div className="flex justify-center mt-6 space-x-4 border rounded-lg py-2">
                <span className="text-purple-600 cursor-pointer">쇼핑투데이</span>
                <span className="cursor-pointer">더보기</span>
                <span className="cursor-pointer">10/15</span>
            </div>
        </div>
    );
};

export default FirstMain;