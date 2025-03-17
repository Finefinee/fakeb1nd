import React from 'react';

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">회사 소개</h1>
        
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">기업 비전</h2>
            <p className="text-gray-600 mb-6">
              바이오팜은 혁신적인 의약품 개발을 통해 인류의 건강과 삶의 질 향상에 기여하는 글로벌 제약기업으로 성장하고자 합니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">핵심 가치</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">혁신</h3>
                <p className="text-gray-600">끊임없는 연구와 도전을 통한 혁신 추구</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">신뢰</h3>
                <p className="text-gray-600">높은 품질과 윤리경영으로 신뢰 구축</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">협력</h3>
                <p className="text-gray-600">글로벌 파트너십을 통한 가치 창출</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">연혁</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">2023</h3>
                <p className="text-gray-600">글로벌 임상 3상 진입</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2020</h3>
                <p className="text-gray-600">바이오의약품 연구소 설립</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2015</h3>
                <p className="text-gray-600">코스닥 상장</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2010</h3>
                <p className="text-gray-600">회사 설립</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;