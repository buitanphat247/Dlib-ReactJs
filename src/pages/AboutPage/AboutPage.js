import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white font-bold flex p-4">
        <div className="w-1/2 flex px-10 mx-5 justify-start">
          <ul className="flex md:flex-row flex-col md:gap-[4vw] gap-8">
            <li><a href="/">Trang Chủ</a></li>
            <li><a href="/news-page">Tin Tức</a></li>
            <li><a href="/tutorial-page">Hướng Dẫn</a></li>
            <li><a href="/about-page">Giới Thiệu</a></li>
          </ul>
        </div>
        <div className="w-1/2 flex px-10 mx-5 justify-end">
          <ul className="flex md:flex-row flex-col md:gap-[4vw] gap-8">
            <li><a href="/sign-up">Đăng Kí</a></li>
            <li><a href="/login">Đăng Nhập</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold">Giới Thiệu</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto my-8">
        {/* About Sections */}

          <div className="p-4">
            <h2 className="font-bold px-4">What is Lorem Ipsum?</h2>
            <div className="flex p-4">
              <div className="w-7/12">
                <p className="text-sm text-gray-700 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="w-1/3 flex-grow border border-blue-500 rounded-md ml-4">
                <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" />
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="font-bold px-4">What is Lorem Ipsum?</h2>
            <div className="flex p-4">
              <div className="w-1/3 flex-grow border border-blue-500 rounded-md mr-4">
                <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" />
              </div>
              <div className="w-7/12">
                <p className="text-sm text-gray-700 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="font-bold px-4">What is Lorem Ipsum?</h2>
            <div className="flex p-4">
              <div className="w-7/12">
                <p className="text-sm text-gray-700 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="w-1/3 flex-grow border border-blue-500 rounded-md ml-4">
                <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" />
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="font-bold px-4">What is Lorem Ipsum?</h2>
            <div className="flex p-4">
              <div className="w-1/3 flex-grow border border-blue-500 rounded-md mr-4">
                <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" />
              </div>
              <div className="w-7/12">
                <p className="text-sm text-gray-700 font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
      </main>

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

export default AboutPage;