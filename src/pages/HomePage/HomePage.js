import React from 'react';

const HomePage = () => {
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

      <section className="p-4 px-20">
        <div className="flex bg-blue-500 rounded-lg overflow-hidden">
          <div className="w-1/2 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">THPT Vũng Tàu</h2>
            <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <div className="space-x-2 flex flex-row items-center justify-center gap-8 font-bold">
              <button className="bg-[#e5e7eb] text-blue-500 w-1/2 py-2 rounded">Đăng Nhập</button>
              <button className="bg-[#e5e7eb] text-blue-500 w-1/2 py-2 rounded">Đăng Kí</button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="" alt="Placeholder" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-[#ffedd5] p-4 px-20 border border-y-black">
        <h3 className="text-xl font-semibold text-center mb-4 text-blue-500">Tính Năng Nổi Bật</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            {title: 'Thư Viện Ảnh' },
            {title: 'Thư Viện Ảnh' },
            {title: 'Thư Viện Ảnh' },
            {title: 'Thư Viện Ảnh' },
            {title: 'Thư Viện Ảnh' },
            {title: 'Thư Viện Ảnh' },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1/6">
                <img src="" alt="Placeholder" />
                <h4 className="font-semibold text-blue-500">{item.title}</h4>
              </div>
              <div className="w-3/4">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus maximus leo pharetra a ut mauris. Sed eget efficitur sem, vel venenatis tortor.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="p-4 px-20">
        <h3 className="text-xl font-semibold text-center mb-4 text-blue-500">Tin Tức & Sự Kiện</h3>
        <div className="flex flex-col items-center p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-2/3 border border-blue-500 rounded-md">
            <img
              src=""
              alt="Placeholder"
              className="w-full h-auto"
              width="800"
              height="400"
              style={{ aspectRatio: "800/400", objectFit: "cover" }}
            />
          </div>
          <div className="w-1/2 space-y-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-200 flex items-center p-4 border rounded-md border-blue-500">
                <img
                  src=""
                  alt="Placeholder"
                  className="w-12 h-12 mr-4"
                  width="50"
                  height="50"
                  style={{ aspectRatio: "50/50", objectFit: "cover" }}
                />
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus maximus leo pharetra a ut mauris.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#ffedd5] p-4 px-20 border border-y-black">
        <div className="flex justify-around">
          {[
            { title: 'Hôm Nay', value: 30 },
            { title: 'Hôm Qua', value: 30 },
            { title: 'Lượt tải', value: 30 },
            { title: 'Lượt Xem', value: 30 },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img src="" alt="Placeholder" className="" />
              <div className="text-3xl font-bold text-blue-500">{item.value}</div>
              <div className="text-sm text-gray-600">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

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

export default HomePage;
