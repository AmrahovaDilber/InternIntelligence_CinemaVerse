import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../types/type";
import { Link } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { useMainContext } from "../context/AppContext";

const Signup: React.FC = () => {
  const form = useForm<Inputs>();
  const{currentUser,setCurrentUser}=useMainContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await doCreateUserWithEmailAndPassword(data.email, data.password);
      setCurrentUser(data)
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f9f9]">
      <div className="w-full max-w-md mx-auto p-10 bg-white rounded-lg shadow-md transition-shadow duration-300">
        <h2 className="font-bold text-center text-3xl py-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username Input */}
          <div>
            <input
              {...register("username", {
                required: "Username is required",
              })}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition-all duration-300"
            />
            {errors.username && (
              <p className="text-red-600 text-sm mt-2">{errors.username.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition-all duration-300"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition-all duration-300"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-2">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <input
              {...register("rePassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === form.getValues("password") || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e8ab29] transition-all duration-300"
            />
            {errors.rePassword && (
              <p className="text-red-600 text-sm mt-2">{errors.rePassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#e8ab29] text-white rounded-lg shadow-sm hover:bg-[#c6901c] hover:shadow-md transition duration-300"
          >
            Create Account
          </button>

          {/* Redirect to Login */}
          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-[#e8ab29] hover:text-[#c6901c] transition-colors duration-300"
            >
              Already have an account? Click here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
