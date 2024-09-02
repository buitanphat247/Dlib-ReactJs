import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Log in</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">
              Email address or user name
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-0 right-0 pr-3 flex items-center text-gray-600"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="accent-black" />
              <label className="ml-2 text-sm text-gray-600">Remember me</label>
            </label>
          </div>
          <div className="flex items-center justify-between mb-6">
            <a href="#" className="text-sm text-gray-600">By continuing, you agree to the <a href="#" className="text-black font-semibold underline">Terms of use</a> and 
            <a href="#" className="text-black font-semibold underline"> Privacy Policy</a>.</a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-3xl hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>

          <div className="mt-6 text-center">
            <a href="#" className="text-black font-semibold underline">Forgot your password?</a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-black font-semibold underline">Sign up</a></p>
          </div>

          <div className="flex items-center justify-center mt-6">
            <span className="text-black font-semibold">Or continue with</span>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-4">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-apple"></i>
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
