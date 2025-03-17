import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-[500px]">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">건강한 미래를 만드는 글로벌 제약기업</h1>
              <p className="text-xl mb-8">혁신적인 의약품 개발과 연구를 통해 인류의 건강한 삶에 기여합니다</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50">
                자세히 보기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 사업 영역</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">신약 개발</h3>
              <p className="text-gray-600">혁신적인 신약 개발을 통해 난치병 치료의 새로운 길을 열어갑니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">바이오의약품</h3>
              <p className="text-gray-600">첨단 바이오 기술을 활용한 차세대 의약품을 연구합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">제네릭의약품</h3>
              <p className="text-gray-600">높은 품질의 제네릭 의약품으로 의료 접근성을 높입니다.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">연구 성과</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">글로벌 임상시험</h3>
              <p className="text-gray-600 mb-4">
                전 세계 20개국에서 진행 중인 임상시험을 통해 새로운 치료제의 안전성과 유효성을 검증하고 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>항암제 파이프라인 10건</li>
                <li>희귀질환 치료제 개발 5건</li>
                <li>면역치료제 연구 진행 중</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">연구 투자</h3>
              <p className="text-gray-600 mb-4">
                매출액의 15% 이상을 R&D에 투자하며, 글로벌 제약사들과의 협력을 통해 연구 역량을 강화하고 있습니다.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>연간 R&D 투자 1,000억원</li>
                <li>연구인력 200명 이상</li>
                <li>글로벌 특허 50건 이상 보유</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;