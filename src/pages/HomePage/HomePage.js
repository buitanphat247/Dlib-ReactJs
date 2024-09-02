import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <section className="p-4 px-20">
        <div className="flex bg-blue-500 rounded-lg overflow-hidden">
          <div className="w-1/2 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">THPT Vũng Tàu</h2>
            <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <div className="space-x-2 flex flex-row items-center justify-center gap-8 font-bold text-blue-500">
              <a href="/login" className="w-1/2 bg-[#e5e7eb] py-2 rounded text-center">Đăng Nhập</a>
              <a href="/sign-up" className="w-1/2 bg-[#e5e7eb] py-2 rounded text-center">Đăng Kí</a>
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" className="w-full h-full object-cover" />
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
                <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" />
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
              src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg"
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
                  src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg"
                  alt="Placeholder"
                  className="w-1/3 h-20 mr-4"
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
              <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" className="p-4" />
              <div className="text-3xl font-bold text-blue-500">{item.value}</div>
              <div className="text-sm text-gray-600">{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
