import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-indigo-300 text-center p-8">
      <h1 className="text-4x1 md:text-6x1 font-bold text-gray-800 mb-4">
        Welcome to the Mental Health Application. Your Wellness Space.
      </h1>
      <p className="text-lg md:text-x1 text-gray-600 mb-8">
        Discover tools and resources to help you unwind and reconnect with
        yourself.
      </p>
      <div className="space-x-4">
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          Contact
        </Link>
        <Link
          to="/game"
          className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600"
        >
          Relaxation Game
        </Link>
      </div>
    </div>
  );
};

export default Home;
