import React from 'react';

const TutorialPage = () => {
  const cards = Array(8).fill({
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    buttonText: 'Xem Ngay'
  });

  return (
    <div className="bg-gray-100">

      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold text-blue-500">Hướng Dẫn & Sử Dụng</h1>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-20">
        {cards.map((card, index) => (
          <div key={index} className="bg-gray-200 border border-blue-500 rounded-lg shadow flex items-start">
            <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" className="p-4 w-1/3"/>
            <div className="flex-1 col-span-4 p-4">
              <p className="text-gray-700 mb-4">{card.description}</p>
              <button className="bg-blue-500 text-white rounded px-4 py-2 w-1/3">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialPage;
