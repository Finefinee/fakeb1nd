import React from 'react';

const Products = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">제품 정보</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">항암제</h3>
              <p className="text-gray-600 mb-4">
                혁신적인 표적 항암제로 암 치료의 새로운 패러다임을 제시합니다.
              </p>
              <button className="text-blue-600 font-semibold">자세히 보기 →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">면역치료제</h3>
              <p className="text-gray-600 mb-4">
                인체의 면역체계를 강화하여 질병과 싸우는 혁신적인 치료제입니다.
              </p>
              <button className="text-blue-600 font-semibold">자세히 보기 →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-500 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">희귀질환 치료제</h3>
              <p className="text-gray-600 mb-4">
                희귀질환 환자들을 위한 맞춤형 치료 솔루션을 제공합니다.
              </p>
              <button className="text-blue-600 font-semibold">자세히 보기 →</button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">연구 파이프라인</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-4 text-left">제품명</th>
                  <th className="border p-4 text-left">적응증</th>
                  <th className="border p-4 text-left">개발단계</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4">BP-101</td>
                  <td className="border p-4">폐암</td>
                  <td className="border p-4">임상 3상</td>
                </tr>
                <tr>
                  <td className="border p-4">BP-201</td>
                  <td className="border p-4">류마티스 관절염</td>
                  <td className="border p-4">임상 2상</td>
                </tr>
                <tr>
                  <td className="border p-4">BP-301</td>
                  <td className="border p-4">당뇨병</td>
                  <td className="border p-4">임상 1상</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;