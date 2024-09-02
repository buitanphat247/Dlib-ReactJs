import React from 'react';

const NewsPage = () => {
  return (
    <div className="bg-gray-100">
      <header className="text-center py-10">
        <h1 className="text-2xl font-bold text-blue-500">Tin Tức & Sự Kiện</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto my-8">
          <div className="flex flex-col items-center p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full md:w-7/12 border border-blue-500 rounded-md">
              <img
                src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg"
                alt="Placeholder"
                className="w-full h-auto"
                width="800"
                height="400"
                style={{ aspectRatio: "800/400", objectFit: "cover" }}
              />
            </div>
          <div className="flex flex-grow flex-col space-y-4 w-full md:w-1/3">
            {[1, 2, 3].map((item) => (
            <div className="bg-gray-200 flex items-center p-4 border rounded-md border-blue-500">
              <img
                  src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg"
                  alt="Placeholder"
                  className="w-1/3 h-20 mr-4"
                />
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus arcu maximus leo pellentesque
                pharetra a ut mauris. Sed eget eleifend sem, vel venenatis tortor.
              </p>
            </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-2 p-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="border border-blue-500 p-4 rounded-md shadow-md">
              <div className="flex items-center justify-center mb-2">
                <div className="flex items-center justify-center">
                  <img src="https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-9.jpg" alt="Placeholder" />
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewsPage;