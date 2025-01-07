import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../types/type";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMainContext } from "../context/AppContext";
import { doPasswordReset, doSignInWithEmailAndPassword } from "../firebase/auth";

const Login: React.FC = () => {
  const { userLoggedIn,setUserLoggedIn } = useMainContext();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const form = useForm<Inputs>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(data.email, data.password);
        alert("Successfully Logged In");
        setUserLoggedIn(true);
        navigate("/");
      } catch (error) {
        console.error("Login Error:", error);
        alert("Login failed. Please check your email and password.");
      } finally {
        setIsSigningIn(false);
      }
    }
  };



  const handlePasswordReset = async () => {
    const email = form.getValues("email");
    if (!email) {
      alert("Please enter your email to reset the password.");
      return;
    }
    try {
      await doPasswordReset(email);
      alert("Password reset email sent. Please check your inbox.");
    } catch (error) {
      console.error("Password Reset Error:", error);
      alert("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f9f9]">
      <div className="w-full max-w-md mx-auto p-10 bg-white rounded-lg shadow-md transition-shadow duration-300">
        <h2 className="font-bold text-center text-3xl py-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition-all duration-300"
            />
            {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email.message}</p>}
          </div>

          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition-all duration-300"
            />
            {errors.password && <p className="text-red-600 text-sm mt-2">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#e8ab29] text-white rounded-lg shadow-sm hover:bg-[#c6901c] hover:shadow-md transition duration-300"
          >
            Login
          </button>

         

          <div className="flex items-center justify-between">
            <Link to="/signup" className="text-[#e8ab29] hover:text-[#c6901c] transition-colors duration-300">
              Create account
            </Link>
            <button
              type="button"
              onClick={handlePasswordReset}
              className="text-[#e8ab29] hover:text-[#c6901c] transition-colors duration-300"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
