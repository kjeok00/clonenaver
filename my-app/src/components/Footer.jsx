import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 text-sm text-center p-4 mt-10">
      <div className="max-w-4xl mx-auto">
        <ul className="flex justify-center space-x-4 mb-2">
          <li className="hover:text-gray-800 cursor-pointer">이용약관</li>
          <li className="hover:text-gray-800 cursor-pointer">개인정보처리방침</li>
          <li className="hover:text-gray-800 cursor-pointer">고객센터</li>
          <li className="hover:text-gray-800 cursor-pointer">회사소개</li>
        </ul>
        <p className="text-xs">&copy; 2024 NAVER Corp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;