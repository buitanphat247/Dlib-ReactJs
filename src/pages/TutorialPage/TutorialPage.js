import React from 'react';

const TutorialPage = () => {
  const cards = Array(8).fill({
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    buttonText: 'Xem Ngay'
  });

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white font-bold flex p-4">
        <div className="w-1/2 flex px-10 mx-5 justify-start">
          <ul className="flex md:flex-row flex-col md:gap-[4vw] gap-8">
            <li><a href="#">Trang Chủ</a></li>
            <li><a href="#">Tin Tức</a></li>
            <li><a href="#">Hướng Dẫn</a></li>
            <li><a href="#">Giới Thiệu</a></li>
          </ul>
        </div>
        <div className="w-1/2 flex px-10 mx-5 justify-end">
          <ul className="flex md:flex-row flex-col md:gap-[4vw] gap-8">
            <li><a href="#">Đăng Kí</a></li>
            <li><a href="#">Đăng Nhập</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold text-blue-500">Hướng Dẫn & Sử Dụng</h1>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-20">
        {cards.map((card, index) => (
          <div key={index} className="bg-gray-200 border border-blue-500 rounded-lg shadow flex items-start grid grid-cols-5 gap-4">
            <img className="mr-4 col-span-1" alt="Placeholder" />
            <div className="flex-1 col-span-4 border border-l-blue-500 p-4">
              <p className="text-gray-700 mb-4">{card.description}</p>
              <button className="bg-blue-500 text-white rounded px-4 py-2 w-1/3">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-20 mt-10">
        <div className="font-semibold grid grid-cols-1 md:grid-cols-3 gap-4 text-left py-5">
          <div className="space-y-5">
            <p>Service</p>
            <p>Web design</p>
            <p>Development</p>
            <p>Hosting</p>
          </div>
          <div className="space-y-5">
            <p>Service</p>
            <p>Web design</p>
            <p>Development</p>
            <p>Hosting</p>
          </div>
          <div className="space-y-5">
            <p>Service</p>
            <p>Web design</p>
            <p>Development</p>
            <p>Hosting</p>
          </div>
        </div>
        <hr className="mb-4"></hr>
        <p className="mt-4">Copyright ©2024</p>
      </footer>
    </div>
  );
};

export default TutorialPage;
