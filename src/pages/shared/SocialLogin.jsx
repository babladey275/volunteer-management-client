import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(location.state || "/");
        }
      })
      .catch((error) => {
        toast.error(error.message || "An error occurred. Please try again.");
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline border-2 btn-neutral w-full rounded-md"
      >
        <span>
          <FaGoogle />
        </span>
        Sign in With Google
      </button>
    </div>
  );
};

export default SocialLogin;
