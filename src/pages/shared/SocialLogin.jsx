import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate("/");
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
      <Toaster></Toaster>
    </div>
  );
};

export default SocialLogin;
