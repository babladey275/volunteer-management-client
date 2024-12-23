import React from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login Your Account
        </h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                className="input input-bordered w-full pl-10"
                placeholder="Enter your email"
                required
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaUserAlt />
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                id="password"
                className="input input-bordered w-full pl-10"
                placeholder="Enter your password"
                required
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaLock />
              </span>
            </div>
          </div>

          <button type="submit" className="w-full btn btn-neutral">
            Log in
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
