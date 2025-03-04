import Sidebar from "./Sidebar";

const MainSection = () => {
    return (
      <main className="flex mt-4 px-6">
        {/* 메인 콘텐츠 */}
        <section className="w-2/3 bg-gray-50 p-4">메인 콘텐츠 (뉴스, 쇼핑, 추천 상품 등)</section>
  
        {/* 사이드바 */}
        <Sidebar />
      </main>
    );
  };
  
  export default MainSection;