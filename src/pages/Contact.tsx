import React from 'react';

const Contact = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">문의하기</h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="이름을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="이메일을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  문의 제목
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="문의 제목을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  문의 내용
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="문의 내용을 입력해주세요"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                문의하기
              </button>
            </form>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">찾아오시는 길</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">주소</h3>
                  <p className="text-gray-600">서울특별시 강남구 테헤란로 123 바이오팜빌딩</p>
                </div>
                <div>
                  <h3 className="font-semibold">전화</h3>
                  <p className="text-gray-600">02-1234-5678</p>
                </div>
                <div>
                  <h3 className="font-semibold">이메일</h3>
                  <p className="text-gray-600">contact@biopharma.kr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;