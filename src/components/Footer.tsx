import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">바이오팜</h3>
            <p className="text-gray-400">
              혁신적인 의약품 개발로<br />
              더 건강한 미래를 만들어갑니다
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">주소</h3>
            <p className="text-gray-400">
              서울특별시 강남구 테헤란로 123<br />
              바이오팜빌딩
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <p className="text-gray-400">
              전화: 02-1234-5678<br />
              이메일: contact@biopharma.kr
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2023 바이오팜. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;