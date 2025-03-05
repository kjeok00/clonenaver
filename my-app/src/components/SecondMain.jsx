import react from "react";
import SampleImage from "../resources/shopping.png";

const SecondMain = () => {
    const product = [
        {
            id: 1,
            image: SampleImage,
            title1: "사무실에서 다들",
            title2: "이것만 끼던데~?"
        },
        {
            id: 2,
            image: SampleImage,
            title1: "최대90% SALE",
            title2: "2만대~할인중"
        },
        {
            id: 3,
            image: SampleImage,
            title1: "예쁜빅사이즈~",
            title2: "브랜드 퀄리티"
        },
        {
            id: 4,
            image: SampleImage,
            title1: "봄 컬러 5종 택1",
            title2: "2만원대 핫딜 중"
        },
        {
            id: 5,
            image: SampleImage,
            title1: "옆집에도 있는",
            title2: "인기절정 바이크"
        },
        {
            id: 6,
            image: SampleImage,
            title1: "윈드재킷69%↓",
            title2: "운동할때 땀나~"
        },
        {
            id: 7,
            image: SampleImage,
            title1: "도로시 44% OFF",
            title2: "랩 다이아몬드!"
        },
        {
            id: 8,
            image: SampleImage,
            title1: "헤지스 아우터",
            title2: "지금 특가 SALE!"
        },
        {
            id: 9,
            image: SampleImage,
            title1: "밤 듬~뿍 넣은",
            title2: "식사 대용 약밥"
        },
        {
            id: 10,
            image: SampleImage,
            title1: "케이스 낀거야?",
            title2: "S25 신제품 출시"
        }
    ];

    return (
        // 헤더 
        <div className="border-2 rounded-lg px-4 felx flex-col object-cover">
            <div className="flex justify-between my-4 ">
                <div className="flex gap-4 text-gray-400 text-l font-bold">
                    <span className="hover:text-black cursor-pointer">쇼핑</span>
                    <span className="hover:text-black cursor-pointer">맨즈</span>
                    <span className="hover:text-black cursor-pointer">원쁠딜</span>
                    <span className="hover:text-black cursor-pointer">쇼핑라이브</span>
                </div>
                <div className="text-sm font-medium flex ">
                    <span className="text-black hover:text-black cursor-pointer">1</span>
                    <span className="text-gray-400 hover:text-black cursor-pointer">/25</span>
                    <div className="ml-2">
                        <span className="text-gray-400 hover:text-black cursor-pointer rounded-sm border-2 p-1">←</span>
                        <span className="text-gray-400 hover:text-black cursor-pointer rounded-sm border-2 p-1">→</span>
                    </div>
                </div>
            </div>

            <div className="flex">
                
                <div className="w-1/3 space-y-5">
                    {/* 왼쪽1 */}
                    <div className=
                        "flex flex-col justify-center px-2 py-1 text-gray-500 border-2 rounded-lg bg-gray-100 h-20 text-sm space-y-1">
                        <div className="flex items-center space-x-7">
                            <span className="cursor-pointer hover:text-black">쿠팡</span>
                            <span className="cursor-pointer hover:text-black">G마켓</span>
                            <span className="cursor-pointer hover:text-black">옥션</span>
                            <span className="cursor-pointer hover:text-black">올리브영</span>
                        </div>
                        <div className="flex items-center space-x-8">
                            <span className="cursor-pointer hover:text-black">11번가</span>
                            <span className="cursor-pointer hover:text-black">SSG닷컴</span>
                            <span className="cursor-pointer hover:text-black">GS SHOP</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="cursor-pointer hover:text-black">하프클럽</span>
                            <span className="cursor-pointer hover:text-black">CJ온스타일</span>
                            <span className="cursor-pointer hover:text-black">패션플러스</span>
                        </div>
                    </div>

                    {/*왼쪽2*/}
                    <div className="flex justify-evenly px-2 py-2 rounded-lg border-2 bg-red-50 space-x-4 h-16">
                        <div className="flex justify-center flex-col items-center cursor-pointer text-xs">
                            <div className="bg-gray-50 rounded-full border border-gray-200 h-6 w-6 flex justify-center items-center">
                                <span>👨</span>
                            </div>
                            <span>마이쇼핑</span>
                        </div>
                        <div className="flex justify-center flex-col items-center cursor-pointer text-xs">
                            <div className="bg-gray-50 rounded-full border border-gray-200 h-6 w-6 flex justify-center items-center">
                                <span>⭐️</span>
                            </div>
                            <span>리뷰적립</span>
                        </div>
                        <div className="flex justify-center flex-col items-center cursor-pointer text-xs">
                            <div className="bg-gray-50 rounded-full border border-gray-200 h-6 w-6 flex justify-center items-center">
                                <span>🚙</span>
                            </div>
                            <span>주문</span>
                        </div>
                        <div className="flex justify-center flex-col items-center cursor-pointer text-xs">
                            <div className="bg-gray-50 rounded-full border border-gray-200 h-6 w-6 flex justify-center items-center">
                                <span>🛍️</span>
                            </div>
                            <span>장바구니</span>
                        </div>
                    </div>

                    {/*왼쪽3*/}
                    <div className="flex flex-col items-center">
                        <img
                            src={SampleImage} alt="ad" className="shadow-lg w-60 rounded-lg h-36"
                        />
                        <div className="flex justify-center text-gray-500 font-semibold text-xs">
                            <span>G마켓! 헤지스, 닥스 인기 잡화 SALE!</span>
                        </div>
                    </div>
                </div>


                {/* 오른쪽 광고 */}
                <div className="grid grid-cols-5 font-medium text-xs w-2/3 gap-2 mx-2">
                    {product.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.title} className="w-24 h-32 object-cover rounded-sm" />
                            <div className="flex flex-col justify-center w-24 my-2">
                                <span>{product.title1}</span>
                                <span>{product.title2}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*footer*/}
            <div className="rounded-lg border-2 border-purple-100 bg-purple-100 flex jutify-start px-2 py-2 space-x-2 text-sm my-4">
                <span className="text-black font-bold">오늘의 혜택</span>
                <span className=" text-purple-500 font-semibold">CJ온스타일</span>
                <span className=" text-black font-semibold">특가로 만나는 BEST 상품! 절대 놓칠 수 없는</span>
                <span className="text-purple-400 font-semibold">특별 할인 찬스!</span>
            </div>

        </div>
    );
};

export default SecondMain;