import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        {/* 설명 텍스트 */}
        <p className="text-gray-600 text-sm mb-4">
          네이버를 더 안전하고 편리하게 이용하세요
        </p>

        {/* 로그인 버튼 */}
        <button className="w-full bg-green-500 text-white font-bold py-3 rounded-md text-lg flex justify-center items-center">
          <span className="text-xl">NAVER</span>
          <span className="text-sm font-normal ml-2">로그인</span>
        </button>

        {/* 하단 링크 */}
        <div className="flex justify-center space-x-4 text-gray-500 text-xs mt-4">
          <a href="#" className="hover:text-gray-800">아이디 찾기</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-800">비밀번호 찾기</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-800">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default Login;