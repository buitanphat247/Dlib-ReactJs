import React from "react";
import { Outlet } from "react-router";


const GuestLayout = () => {
    return (
        <div className="bg-gray-100 w-80%">
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
            <Outlet></Outlet>
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
  
  export default GuestLayout;