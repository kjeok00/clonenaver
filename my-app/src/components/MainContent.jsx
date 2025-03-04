import React from "react";

const MainContent = () => {
  return (
    <main className="p-4 bg-gray-100">
      {/* 배너 */}
      <div className="bg-green-500 text-white text-center p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold">네이버 쇼핑 특별 할인 이벤트!</h2>
        <p className="text-sm">지금 바로 확인하세요.</p>
      </div>

      {/* 뉴스 섹션 */}
      <div className="mt-6 bg-white p-4 rounded-md shadow-md">
        <h3 className="text-lg font-bold border-b pb-2 mb-4">실시간 뉴스</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="hover:text-green-600 cursor-pointer">✔ 경제 위기 극복 방안 논의...</li>
          <li className="hover:text-green-600 cursor-pointer">✔ 오늘의 날씨: 전국 대체로 맑음</li>
          <li className="hover:text-green-600 cursor-pointer">✔ 네이버 AI 서비스, 혁신적인 변화 예고</li>
          <li className="hover:text-green-600 cursor-pointer">✔ 한국 축구대표팀, 월드컵 예선 승리!</li>
        </ul>
      </div>
    </main>
  );
};

export default MainContent;