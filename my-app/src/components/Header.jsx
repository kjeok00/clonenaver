import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* 로고 */}
      <div className="text-green-600 text-2xl font-bold">Naver</div>

      {/* 검색창 */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-1/2">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="w-full outline-none"
        />
        <button className="ml-2 text-gray-500">🔍</button>
      </div>

      {/* 로그인 버튼 */}
      <div>
        <button className="text-green-600 border border-green-600 px-4 py-1 rounded-full">
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;