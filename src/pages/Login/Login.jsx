import { FaLock, FaUserAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        if (result?.user) {
          navigate(from);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message || "Something went wrong. Please try again.",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Volunteer Wave | Login</title>
      </Helmet>
      <div className="flex justify-center items-center py-10 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Login Your Account
          </h2>

          <form onSubmit={handleLogin}>
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

            <button
              type="submit"
              className="w-full btn bg-[#2985b4] hover:bg-[#275C87] text-white"
            >
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
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </>
  );
};

export default Login;
