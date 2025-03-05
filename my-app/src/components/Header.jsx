import React from "react";

const Header = () => {
  return (
    <div className="bg-white">

      <div className="flex items-center justify-between px-4 py-2 text-gray-500 text-sm">
        {/* 좌측 아이콘 */}
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">🗒️</span>
          <span className="cursor-pointer">💰</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">💬</span>
          <span className="cursor-pointer">🔔</span>
          <span className="cursor-pointer">🛍️</span>
        </div>
      </div>

      <header className="flex items-center justify-center px-4 py-2 bg-white">
        {/* 검색창 */}
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-1/2">
          <div className="text-green-600 text-2xl font-bold px-2">N</div>
          <input
            type="text"
            placeholder=""
            className="w-full h-full outline-none text-center"
          />
          <button className="ml-2 text-gray-500">🔍</button>
        </div>
      </header>
    </div>

  );
};

export default Header;