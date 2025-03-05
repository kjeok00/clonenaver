import React from "react";

const Navigation = () => {
  const menuItems = [
    "메일",
    "카페",
    "블로그",
    "지식iN",
    "쇼핑",
    "Pay",
    "TV",
    "뉴스",
    "증권",
    "부동산",
    "지도",
    "웹툰",
  ];

  return (
    <nav className="bg-white">
      <ul className="flex justify-center space-x-6 py-2 text-gray-700 text-sm">
        {menuItems.map((item, index) => (
          <li key={index} className="hover:text-green-600 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;