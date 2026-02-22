import img from "../assets/login.svg";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="bg-white rounded-2xl shadow-xl flex w-[900px] overflow-hidden">

        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-6">Create Account</h2>

          <input type="text" placeholder="Full Name" className="w-full mb-4 p-3 border rounded-lg" />
          <input type="email" placeholder="Email" className="w-full mb-4 p-3 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full mb-6 p-3 border rounded-lg" />

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
            Sign Up
          </button>

          <p className="text-sm mt-4">
            Already have an account? <Link to="/login" className="text-purple-600">Login</Link>
          </p>
        </div>

        <div className="w-1/2 bg-purple-50 flex items-center justify-center">
          <img src={img} alt="signup" className="w-80" />
        </div>

      </div>
    </div>
  );
}
