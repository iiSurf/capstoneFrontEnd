import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-indigo-300 text-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 fade-in">
        Welcome to the Mental Health Application. Your Wellness Space.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 fade-in">
        Discover tools and resources to help you unwind and reconnect with
        yourself.
      </p>
      <div className="space-x-4 fade-in">
      <Link
          to="/login"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 fade-in"
        >
          Login
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 fade-in"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 fade-in"
        >
          Contact
        </Link>
        <Link
          to="/box-breathing"
          className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 fade-in"
        >
          Box Breathing
        </Link>
        <Link
          to="/game"
          className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 fade-in"
        >
          Relaxation Game
        </Link>
      </div>
    </div>
  );
};

export default Home;
