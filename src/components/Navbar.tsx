import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">바이오팜</Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-200">홈</Link>
            <Link to="/about" className="hover:text-blue-200">회사소개</Link>
            <Link to="/products" className="hover:text-blue-200">제품정보</Link>
            <Link to="/contact" className="hover:text-blue-200">문의하기</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;