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
            title1: "돌처럼 굳어있던",
            title2: "종아리 알, 완전 박살!",
            price: "89,000",
            originalPrice: "199,000",
            brand: "휴그랩",
            discount: "55%",
        },
        {
            id: 2,
            image: SampleImage,
            title1: "6천장돌파! 데일리템~",
            title2: "6가지컬러로 다양한 코디!",
            price: "29,900",
            originalPrice: "40,000",
            brand: "갠소",
            discount: "25%",
        },
        {
            id: 3,
            image: SampleImage,
            title1: "역대급 8만원 할인! 41%↓",
            title2: "커플신발로 핫해~인기슈즈",
            price: "116,000",
            originalPrice: "198,000",
            brand: "아키클래식",
            discount: "41%",
        },
        {
            id: 4,
            image: SampleImage,
            title1: "봄이 느껴지는 코디룩!",
            title2: "비디솔잎가디건",
            price: "25,380",
            originalPrice: "27,00",
            brand: "그레이시크",
            discount: "6%",
        },
    ];


    return (
        <div className="bg-white border-2 overflow-hidden rounded-lg">
            {/* 메뉴 */}
            <ul className="flex justify-start space-x-4 py-4 mx-4 text-gray-400 text-normal font-bold">
                {menuItems.map((item, index) => (
                    <li key={index} className="hover:text-black cursor-pointer">
                        {item}
                    </li>
                ))}
            </ul>

            {/* 쇼핑 배너 */}
            <div className="bg-gray-100 text-gray-500 font-bold  mx-4 p-4 rounded-md flex justify-between items-center">
                <div className="text-sm flex space-x-4">
                    <span>리빙러빙 데이 가전</span>
                    <span className="text-gray-300">|</span>
                    <span>이사&혼수 시즌 맞이 가전 인기브랜드 BIG SALE</span>
                </div>
                <div className="text-lg font-bold text-black">마이쇼핑</div>
            </div>

            {/* 상품 목록 */}
            <div className="grid grid-cols-2 gap-4 mt-6 mx-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg my-2 flex items-center">
                        <img
                            src={product.image}
                            alt={product.title1}
                            className=" object-cover mr-2 shadow-lg w-48 h-28 rounded-sm "
                        />
                        <div className="flex flex-col justify-start space-y-2">
                            <span className="text-sm font-bold">{product.title1}</span>
                            <span className="text-sm font-bold">{product.title2}</span>
                            <span className="text-red-500 text-sm font-semibold">
                                {product.discount}
                                <span className="text-black text-sm font-semibold">
                                    {product.price}원</span>
                                <span className="text-gray-400 text-xs line-through">
                                    {product.originalPrice}원
                                </span>
                            </span>
                            <span className="text-gray-600 text-xs font-semibold">{product.brand}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 쇼핑투데이 */}
            <div className="flex justify-center items-center space-x-3 border-t py-2 mt-2">
                <button className="w-9 y-9 rounded-full flex items-center justify-center border-2 p-1 shadow-md">←</button>
                <span className="text-purple-600">쇼핑투데이</span>
                <span className="text-black">더보기</span>
                <div>
                    <span className="text=black">10</span>
                    <span className="text-gray-500">/15</span>
                </div>
                <button className="w-9 y-9 rounded-full flex items-center justify-center border-2 p-1 shadow-md">→</button>
            </div>
        </div>
    );
};

export default FirstMain;