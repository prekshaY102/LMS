import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="mb-6">TO OUR WEBSITE WHO GIVES U THE LEARNING SERVICES</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold">
          Login
        </Link>
        <Link to="/signup" className="border px-6 py-2 rounded-lg">
          Signup
        </Link>
      </div>
    </div>
  );
}
