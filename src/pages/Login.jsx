import img from "../assets/login.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="bg-white rounded-2xl shadow-xl flex w-[900px] overflow-hidden">

        {/* Left Image */}
        <div className="w-1/2 bg-purple-50 flex items-center justify-center">
          <img src={img} alt="login" className="w-80" />
        </div>

        {/* Right Form */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-2">Hello, Welcome Back</h2>
          <p className="text-gray-500 mb-6">New user? <Link to="/signup" className="text-purple-600">Sign up here</Link></p>

          <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-3 border rounded-lg" />

          <div className="flex justify-between text-sm mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>
            <span className="text-purple-600 cursor-pointer">Forgot Password?</span>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg mb-4">
            Login Now
          </button>

          <div className="flex gap-4">
            <button className="w-1/2 border py-2 rounded-lg">Google</button>
            <button className="w-1/2 border py-2 rounded-lg">Facebook</button>
          </div>
        </div>

      </div>
    </div>
  );
}
