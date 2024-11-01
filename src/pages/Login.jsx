const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2x1 font-bold mb-4">Login</h2>
        <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="password" />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
