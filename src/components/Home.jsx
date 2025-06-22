import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-[80vh] text-center">
    <h1 className="text-4xl font-bold mb-6">Welcome to Item Manager</h1>
    <div className="flex gap-6">
      <Link
        to="/add"
        className="px-6 py-3 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition"
      >
        ➕ Add Item
      </Link>
      <Link
        to="/view"
        className="px-6 py-3 bg-green-400 text-white rounded-xl hover:bg-green-500 transition"
      >
        📦 View Items
      </Link>
    </div>
  </div>
);

export default Home;
