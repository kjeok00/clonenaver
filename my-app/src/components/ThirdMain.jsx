import react from "react";
import SampleImage from "../resources/shopping.png";

const ThirdMain = () => {
    const product = [
        {
            id: 1,
            image: SampleImage,
            title: "사무실에서 다들 이것만 끼던데~?"
        },
        {
            id: 2,
            image: SampleImage,
            title: "최대90% SALE 2만대~할인중"
        },
        {
            id: 3,
            image: SampleImage,
            title: "예쁜빅사이즈~ 브랜드 퀄리티"
        },
        {
            id: 4,
            image: SampleImage,
            title: "봄 컬러 5종 택1 2만원대 핫딜 중"
        },
        {
            id: 5,
            image: SampleImage,
            title: "옆집에도 있는 인기절정 바이크"
        },
        {
            id: 6,
            image: SampleImage,
            title: "윈드재킷69%↓ 운동할때 땀나~"
        },
        {
            id: 7,
            image: SampleImage,
            title: "도로시 44% OFF 랩 다이아몬드!"
        },
        {
            id: 8,
            image: SampleImage,
            title: "헤지스 아우터 지금 특가 SALE!"
        },
        {
            id: 9,
            image: SampleImage,
            title: "밤 듬~뿍 넣은 식사 대용 약밥"
        },
        {
            id: 10,
            image: SampleImage,
            title: "케이스 낀거야? S25 신제품 출시"
        }
    ];

    return (
        // 헤더 
        <div className="mx-4 my-4 border-2 rounded-lg px-2 felx flex-col">
            <div className="flex justify-between my-4">
                <dev className="flex gap-4 text-gray-500">
                    <span>쇼핑</span>
                    <span>맨즈</span>
                    <span>원쁠딜</span>
                    <span>쇼핑라이브</span>
                </dev>
                <span className="text-gray-500">1/25 ⬅️➡️</span>
            </div>

            {/* 오른쪽 광고 */}
            <div className="grid grid-cols-5 ">
                {product.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="flex justify-center">{product.title}</div>
                    </div>
                ))}
            </div>

            {/* 왼쪽1 */}
            <div className="flex flex-col px-2 py-2 text-gray-500 border-2 rounded-lg bg-gray-100">
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
            <div className="flex justify-evenly px-2 py-2 rounded-lg border-2 bg-red-50 space-x-4">
                <div className="flex justify-center flex-col items-center cursor-pointer">
                    <span>👨</span>
                    <span>마이쇼핑</span>
                </div>
                <div className="flex justify-center flex-col items-center cursor-pointer">
                    <span>⭐️</span>
                    <span>리뷰적립</span>
                </div>
                <div className="flex justify-center flex-col items-center cursor-pointer">
                    <span>🚙</span>
                    <span>주문</span>
                </div>
                <div className="flex justify-center flex-col items-center cursor-pointer">
                    <span>🛍️</span>
                    <span>장바구니</span>
                </div>
            </div>

            {/*왼쪽3*/}
            <div className="flex flex-col items-center">
                <img
                    src={SampleImage} alt="ad" className="shadow-lg"
                />
                <div className="flex justify-center text-gray-500 font-semibold">
                    <span>G마켓! 헤지스, 닥스 인기 잡화 SALE!</span>
                </div>
            </div>

            {/*footer*/}
            <div className="rounded-lg border-2 border-purple-100 bg-purple-100 flex jutify-start px-2 py-2 space-x-2">
                <span className="text-black font-bold">오늘의 혜택</span>
                <span className=" text-purple-400 font-semibold">CJ온스타일</span>
                <span className=" text-black font-semibold">특가로 만나는 BEST 상품! 절대 놓칠 수 없는</span>
                <span className="text-purple-300 font-semibold">특별 할인 찬스!</span>
            </div>

        </div>
    );
};

export default ThirdMain;