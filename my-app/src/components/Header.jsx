import SearchBar from "./SearchBar";

const Header = () => {
    return (
      <header className="w-full h-16 bg-white flex items-center justify-between px-6 shadow-md">
        {/* 네이버 로고 */}
        <h1 className="text-2xl font-bold text-green-600">N</h1>
  
        {/* 검색창 */}
        <SearchBar />
  
        {/* 로그인 버튼 */}
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">로그인</button>
      </header>
    );
  };
  
  export default Header;